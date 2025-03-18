import { registerEnumType } from '@nestjs/graphql';

export enum License_typeScalarFieldEnum {
    id = "id",
    license_type_name = "license_type_name",
    download_count = "download_count",
    price = "price",
    status = "status",
    expiration_date = "expiration_date"
}


registerEnumType(License_typeScalarFieldEnum, { name: 'License_typeScalarFieldEnum', description: undefined })
