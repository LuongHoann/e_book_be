import { registerEnumType } from '@nestjs/graphql';

export enum CategoryScalarFieldEnum {
    name = "name"
}


registerEnumType(CategoryScalarFieldEnum, { name: 'CategoryScalarFieldEnum', description: undefined })
