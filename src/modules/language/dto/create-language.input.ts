import { InputType , Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateLanguageInput  {
  
    @Field(()=> String , {nullable: false})
    language_name: string;
  
    @Field(()=> String , {nullable: false})
    language_code: string
}
