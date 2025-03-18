
import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@ObjectType()
export class LicenseType {
  @Field(()=>ID)
  @IsUUID()
  id: string

  @Field(()=>String)
  license_name_type:string

  @Field(()=>Int)
  download_count: number

  @Field(()=> String)
  status: string

  @Field(()=> String)
  expiration_date: string
}
