import { registerEnumType } from '@nestjs/graphql';

export enum AreaScalarFieldEnum {
    area_name = "area_name"
}


registerEnumType(AreaScalarFieldEnum, { name: 'AreaScalarFieldEnum', description: undefined })
