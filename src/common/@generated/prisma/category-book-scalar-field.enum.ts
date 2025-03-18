import { registerEnumType } from '@nestjs/graphql';

export enum Category_bookScalarFieldEnum {
    category = "category",
    book_id = "book_id"
}


registerEnumType(Category_bookScalarFieldEnum, { name: 'Category_bookScalarFieldEnum', description: undefined })
