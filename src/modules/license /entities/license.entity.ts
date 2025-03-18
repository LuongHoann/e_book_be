import { Book } from '@/modules/book/entities/book.entity';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { LicenseType } from '@/modules/license-type/entities/license-type.entity';

@ObjectType()
export class License {
  @Field(()=> ID ,{nullable : false})
  license_name: string

  @Field(()=> Book, {nullable : false})
  bood_id: Book

  @Field(()=> LicenseType , {nullable: false})
  license_type_id: LicenseType
}
