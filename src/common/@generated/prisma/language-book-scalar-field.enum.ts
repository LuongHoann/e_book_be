import { registerEnumType } from '@nestjs/graphql';

export enum Language_bookScalarFieldEnum {
    language_id = "language_id",
    book_id = "book_id"
}


registerEnumType(Language_bookScalarFieldEnum, { name: 'Language_bookScalarFieldEnum', description: undefined })
