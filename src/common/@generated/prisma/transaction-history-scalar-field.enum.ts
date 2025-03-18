import { registerEnumType } from '@nestjs/graphql';

export enum Transaction_historyScalarFieldEnum {
    book_id = "book_id",
    user_id = "user_id",
    payment_date = "payment_date"
}


registerEnumType(Transaction_historyScalarFieldEnum, { name: 'Transaction_historyScalarFieldEnum', description: undefined })
