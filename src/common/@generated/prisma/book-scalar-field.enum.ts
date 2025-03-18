import { registerEnumType } from '@nestjs/graphql';

export enum BookScalarFieldEnum {
    id = "id",
    book_title = "book_title",
    pushlied_at = "pushlied_at",
    author = "author",
    isbn = "isbn",
    page_number = "page_number",
    discount_id = "discount_id",
    views = "views",
    created_at = "created_at"
}


registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined })
