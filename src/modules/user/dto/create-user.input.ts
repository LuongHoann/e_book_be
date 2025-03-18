import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(()=> String  ,{ nullable: false})
  user_name: string
  
  @Field(()=>String , { nullable: false})
  password: string

  @Field(()=>String , { nullable: false})
  @IsEmail()
  email: string

  @Field(()=>String , {nullable: true})
  avatar: string

  @Field(()=>String , { nullable: false })
  code: string

  @Field(()=>String , { nullable: false})
  expired_code: Date

  @Field(()=> Boolean , { nullable: false})
  account_status: boolean

  @Field(()=> Int , { defaultValue: 4 , nullable: false}) /*4 is default for guest  */
  role: number
}
