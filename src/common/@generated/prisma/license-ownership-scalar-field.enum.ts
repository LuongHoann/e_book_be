import { registerEnumType } from '@nestjs/graphql';

export enum License_ownershipScalarFieldEnum {
    id = "id",
    user_id = "user_id",
    license_id = "license_id",
    download_count = "download_count",
    expiration_date = "expiration_date"
}


registerEnumType(License_ownershipScalarFieldEnum, { name: 'License_ownershipScalarFieldEnum', description: undefined })
