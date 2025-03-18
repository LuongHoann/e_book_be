import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    book_id = "book_id",
    user_id = "user_id",
    rating = "rating"
}


registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })
