
import { ObjectType, Field, Int, ID, Float } from '@nestjs/graphql';

@ObjectType()
export class LicenseType {
  @Field(()=>ID)
  id: string

  @Field(()=>String)
  name:string

  @Field(()=>Int)
  download_count: number

  @Field(()=> String)
  status: string

  @Field(()=> Int)
  duration: number

  @Field(()=>Float)
  price: number
}
