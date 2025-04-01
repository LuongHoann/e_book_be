import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateAreaInput {
  @Field(() => String)
  @IsNotEmpty()
  name: string;

  @Field(()=> String)
  @IsNotEmpty()
  code:string;

  @Field(()=>String , {nullable: false})
  description:string;
}
