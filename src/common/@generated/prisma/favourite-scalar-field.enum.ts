import { registerEnumType } from '@nestjs/graphql';

export enum FavouriteScalarFieldEnum {
    book_id = "book_id",
    user_id = "user_id"
}


registerEnumType(FavouriteScalarFieldEnum, { name: 'FavouriteScalarFieldEnum', description: undefined })
