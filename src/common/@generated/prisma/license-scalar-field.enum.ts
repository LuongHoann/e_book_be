import { registerEnumType } from '@nestjs/graphql';

export enum LicenseScalarFieldEnum {
    id = "id",
    name = "name",
    book_id = "book_id",
    license_type_id = "license_type_id"
}


registerEnumType(LicenseScalarFieldEnum, { name: 'LicenseScalarFieldEnum', description: undefined })
