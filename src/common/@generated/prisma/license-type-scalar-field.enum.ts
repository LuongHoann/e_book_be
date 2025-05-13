import { registerEnumType } from '@nestjs/graphql';

export enum License_typeScalarFieldEnum {
    id = "id",
    name = "name",
    download_count = "download_count",
    price = "price",
    status = "status",
    duration = "duration"
}


registerEnumType(License_typeScalarFieldEnum, { name: 'License_typeScalarFieldEnum', description: undefined })
