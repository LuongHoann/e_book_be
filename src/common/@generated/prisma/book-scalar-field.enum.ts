import { registerEnumType } from '@nestjs/graphql';

export enum BookScalarFieldEnum {
    id = "id",
    book_title = "book_title",
    author = "author",
    isbn = "isbn",
    page_number = "page_number",
    views = "views",
    created_at = "created_at",
    banner_key = "banner_key",
    book_key = "book_key",
    published_at = "published_at",
    description = "description",
    status = "status"
}


registerEnumType(BookScalarFieldEnum, { name: 'BookScalarFieldEnum', description: undefined })
