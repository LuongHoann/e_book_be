import { registerEnumType } from '@nestjs/graphql';

export enum LicenseScalarFieldEnum {
    id = "id",
    license_name = "license_name",
    book_id = "book_id",
    license_type_id = "license_type_id"
}


registerEnumType(LicenseScalarFieldEnum, { name: 'LicenseScalarFieldEnum', description: undefined })
