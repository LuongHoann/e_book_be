import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Language {
  @Field(()=> ID)
  id: string;

  @Field(()=> String , {nullable: false})
  name: string;

  @Field(()=> String , {nullable: false})
  code: string

  @Field(()=> String , {nullable: true})
  native_name: string
}
