import { InputType , Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateLanguageInput  {
  
    @Field(()=> String , {nullable: false})
    name: string;
  
    @Field(()=> String , {nullable: false})
    code: string
  
    @Field(()=> String , {nullable: false})
    native_name: string


}
