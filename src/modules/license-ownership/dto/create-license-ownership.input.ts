import { license } from '../../../common/@generated/license/license.model';
import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateLicenseOwnershipInput {
  @Field(()=> ID, {nullable: false})
  user_id: string

  @Field(()=> ID ,{nullable: false})
  license_id: string

  @Field(()=>Int , {nullable: false})
  download_count: number

  @Field(()=>String , {nullable : false})
  expiration_date: string
}
