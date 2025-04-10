import { registerEnumType } from '@nestjs/graphql';

export enum Book_discountScalarFieldEnum {
    book_id = "book_id",
    discount_id = "discount_id"
}


registerEnumType(Book_discountScalarFieldEnum, { name: 'Book_discountScalarFieldEnum', description: undefined })
