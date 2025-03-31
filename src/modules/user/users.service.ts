import { BadRequestException, HttpStatus, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { I18nContext, I18nService } from 'nestjs-i18n';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { UserValidator } from './users.validators';
import { buildResponse } from '@/utils/customResponse';
import { generateUserCode, hashPassword } from '@/utils/helpers';
import { MailerService } from '@nestjs-modules/mailer';
import dayjs from 'dayjs';



@Injectable()
export class UsersService {
  constructor(
    private i18n: I18nService,
    private readonly prisma: PrismaService,
    private validator: UserValidator,
    private mailerService: MailerService
  ) {}
  async create(createUserInput: CreateUserInput) {
    try{ 
      await this.prisma.user.create({ data: createUserInput })
      return buildResponse(this.i18n,"index.user.createSuccess",HttpStatus.CREATED)
    }catch(err){ 
      throw new InternalServerErrorException("index.user.createFailed")
    }
  }

  async findAll() {
    try {
      const data = await this.prisma.user.findMany();
      return buildResponse(this.i18n, 'index.general.success', HttpStatus.OK, {
        items: data,
      });
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.general.failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: string) {
    try {
      const data = await this.prisma.user.findFirst({ where: { id: id } });
      if (!data) {
        return buildResponse(this.i18n, 'index.user.notFound', HttpStatus.OK);
      }
      return buildResponse(this.i18n, 'index.general.success', HttpStatus.OK, {
        items: data,
      });
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.general.failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    try {
      await this.prisma.user.update({
        data: updateUserInput,
        where: { id: id },
      });
      return buildResponse(
        this.i18n,
        'index.user.updateSuccess',
        HttpStatus.OK,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.user.updateFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: string) {
    try {
      await this.prisma.user.delete({ where: { id: id } });
      return buildResponse(
        this.i18n,
        'index.user.deleteSuccess',
        HttpStatus.OK,
      );
    } catch (error) {
      return buildResponse(
        this.i18n,
        'index.user.deleteFailed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findUniqueUser(username: string) {
    // return null if empty
    const data = await this.prisma.user.findUnique({
      where: { email: username },
    });
    return data;
  }


  async hanldeLogin(createUserInput: CreateUserInput){ 
    const isEmailExist = await this.validator.isEmailExist(createUserInput.email)
    if(isEmailExist){ 
      throw new BadRequestException("index.user.createFailed")
    }
    const hashedPassword = await hashPassword(createUserInput.password)
    const activeCode = generateUserCode();
    console.log("code",activeCode)
    const timeExpired = dayjs().add(1, 'days').toDate()
    createUserInput = {  ...createUserInput , password: hashedPassword , code : activeCode , expired_code: timeExpired }
    return await this.create(createUserInput)
    
  }

  sendMail(username: string , email: string ) {
      this.mailerService.sendMail({
       to: email,
       subject: 'Register Code for New User',
       template: "register",
       context: { 
         name: username,
         activationCode: generateUserCode()
       }
     });
  }


  resendMail(username: string , email: string ) {
       this.mailerService.sendMail({
        to: email,
        subject: 'Forgot Password Code for User',
        template: "forgot",
        context: { 
          name: username,
          resetCode: generateUserCode()
        }
      });
    }


}
