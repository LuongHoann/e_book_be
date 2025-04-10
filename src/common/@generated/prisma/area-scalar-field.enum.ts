import { registerEnumType } from '@nestjs/graphql';

export enum AreaScalarFieldEnum {
    code = "code",
    description = "description",
    name = "name"
}


registerEnumType(AreaScalarFieldEnum, { name: 'AreaScalarFieldEnum', description: undefined })
