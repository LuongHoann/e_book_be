import { registerEnumType } from '@nestjs/graphql';

export enum LanguageScalarFieldEnum {
    id = "id",
    name = "name",
    code = "code"
}


registerEnumType(LanguageScalarFieldEnum, { name: 'LanguageScalarFieldEnum', description: undefined })
