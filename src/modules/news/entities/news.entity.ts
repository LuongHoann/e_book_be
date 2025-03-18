import { User } from '@/modules/user/entities/user.entity';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class News {
  @Field(()=> ID)
  id: string

  @Field(()=>String,{nullable: false})
  title: string

  @Field(()=> String, {nullable: false})
  content: string

  @Field(()=> String)
  publish_date: Date

  @Field(()=>User,  {nullable: false})
  user: User
}
