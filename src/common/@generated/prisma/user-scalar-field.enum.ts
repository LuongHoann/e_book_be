import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    user_name = "user_name",
    password = "password",
    email = "email",
    avatar = "avatar",
    code = "code",
    expired_code = "expired_code",
    account_status = "account_status",
    role = "role"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
