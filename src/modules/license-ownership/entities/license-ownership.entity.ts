import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class LicenseOwnership {
  @Field(()=> ID, {nullable: false})
  id: number

  @Field(()=> ID, {nullable: false})
  user_id: string

  @Field(()=> ID ,{nullable: false})
  license_id: string

  @Field(()=>Int , {nullable: false})
  download_count: number

  @Field(()=>Int , {nullable : false})
  expiration_date: string
}
