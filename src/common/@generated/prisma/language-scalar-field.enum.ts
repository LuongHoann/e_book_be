import { registerEnumType } from '@nestjs/graphql';

export enum LanguageScalarFieldEnum {
    id = "id",
    language_name = "language_name",
    language_code = "language_code"
}


registerEnumType(LanguageScalarFieldEnum, { name: 'LanguageScalarFieldEnum', description: undefined })
