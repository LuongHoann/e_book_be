import { registerEnumType } from '@nestjs/graphql';

export enum Discount_codeScalarFieldEnum {
    id = "id",
    discount_code_name = "discount_code_name",
    discount_value = "discount_value",
    discount_value_percent = "discount_value_percent",
    area_name = "area_name"
}


registerEnumType(Discount_codeScalarFieldEnum, { name: 'Discount_codeScalarFieldEnum', description: undefined })
