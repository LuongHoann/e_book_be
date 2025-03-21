import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { I18nService } from 'nestjs-i18n';
import { PrismaService } from '@/provider/prisma/prisma.service';
import { UserValidator } from './users.validators';
import { buildResponse } from '@/utils/customResponse';
import { User } from './entities/user.entity';
import { hashPassword } from '@/utils/helpers';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class UsersService {
  constructor(
    private i18n: I18nService,
    private readonly prisma: PrismaService,
    private validator: UserValidator,
    private mailerService: MailerService
  ) {}
  async create(createUserInput: CreateUserInput) {
    const isEmailExist = await this.validator.isEmailExist(
      createUserInput.email,
    );
    const hashedPassword = await hashPassword(createUserInput.password);
    if (hashedPassword) {
      createUserInput.password = hashedPassword;
    }
    console.table(createUserInput);
    if (!isEmailExist) {
      try {
        await this.prisma.user.create({ data: createUserInput });
        return buildResponse(
          this.i18n,
          'index.user.createSuccess',
          HttpStatus.CREATED,
        );
      } catch (error) {
        return buildResponse(
          this.i18n,
          'index.user.createFailed',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
    return buildResponse(
      this.i18n,
      'index.general.failed',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
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

  // sendMail() {
  //   try {
  //      this.mailerService.sendMail({
  //       to: 'kimochiasalon3@gmail.com',
  //       subject: 'Register Code for New User',
  //       template: "register",
  //       context: { 
  //         name: "hoan",
  //         activationCode: 123123
  //       }
  //     });
  //   } catch (error) {
  //     console.error('SendMail Error:', error);
  //   }
  // }


  sendMail() {
    try {
       this.mailerService.sendMail({
        to: 'kimochiasalon3@gmail.com',
        subject: 'Forgot Password Code for User',
        template: "forgot",
        context: { 
          name: "hoan",
          resetCode: 123123
        }
      });
    } catch (error) {
      console.error('SendMail Error:', error);
    }
  }
}
