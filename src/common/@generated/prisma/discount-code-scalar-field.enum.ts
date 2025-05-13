import { registerEnumType } from '@nestjs/graphql';

export enum Discount_codeScalarFieldEnum {
    id = "id",
    name = "name",
    value = "value",
    value_percent = "value_percent",
    area_code = "area_code"
}


registerEnumType(Discount_codeScalarFieldEnum, { name: 'Discount_codeScalarFieldEnum', description: undefined })
