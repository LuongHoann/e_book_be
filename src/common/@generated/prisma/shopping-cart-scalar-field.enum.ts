import { registerEnumType } from '@nestjs/graphql';

export enum Shopping_cartScalarFieldEnum {
    book_id = "book_id",
    user_id = "user_id"
}


registerEnumType(Shopping_cartScalarFieldEnum, { name: 'Shopping_cartScalarFieldEnum', description: undefined })
