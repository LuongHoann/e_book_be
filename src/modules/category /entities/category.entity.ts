import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(()=> ID , {nullable: false}) 
  id: number

  @Field(()=> String , {nullable: false})
  name: string

  @Field(()=> String , {nullable: true})
  description: string
  
  
}
