import { registerEnumType } from '@nestjs/graphql';

export enum CategoryScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description"
}


registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
