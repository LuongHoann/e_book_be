import { ObjectType, Field,ID } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(()=> ID , {nullable: false})
  name: string

  
}
