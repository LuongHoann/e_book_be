import { registerEnumType } from '@nestjs/graphql';

export enum AreaScalarFieldEnum {
    name = "name",
    code = "code",
    description = "description"
}


registerEnumType(AreaScalarFieldEnum, { name: 'AreaScalarFieldEnum', description: undefined })
