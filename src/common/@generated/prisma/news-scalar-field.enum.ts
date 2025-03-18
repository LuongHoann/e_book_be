import { registerEnumType } from '@nestjs/graphql';

export enum NewsScalarFieldEnum {
    id = "id",
    title = "title",
    content = "content",
    publish_date = "publish_date",
    user_id = "user_id"
}


registerEnumType(NewsScalarFieldEnum, { name: 'NewsScalarFieldEnum', description: undefined })
