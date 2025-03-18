import { registerEnumType } from '@nestjs/graphql';

export enum PermissionScalarFieldEnum {
    role_id = "role_id",
    url = "url"
}


registerEnumType(PermissionScalarFieldEnum, { name: 'PermissionScalarFieldEnum', description: undefined })
