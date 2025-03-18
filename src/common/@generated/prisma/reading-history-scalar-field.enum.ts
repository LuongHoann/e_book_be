import { registerEnumType } from '@nestjs/graphql';

export enum Reading_historyScalarFieldEnum {
    user_id = "user_id",
    book_id = "book_id",
    state = "state",
    page = "page",
    update_at = "update_at"
}


registerEnumType(Reading_historyScalarFieldEnum, { name: 'Reading_historyScalarFieldEnum', description: undefined })
