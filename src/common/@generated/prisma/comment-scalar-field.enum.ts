import { registerEnumType } from '@nestjs/graphql';

export enum CommentScalarFieldEnum {
    book_id = "book_id",
    user_id = "user_id",
    content = "content"
}


registerEnumType(CommentScalarFieldEnum, { name: 'CommentScalarFieldEnum', description: undefined })
