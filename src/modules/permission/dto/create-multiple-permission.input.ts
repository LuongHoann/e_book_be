import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMultiplePermissionInput {
  @Field(() => Int)
  role_id: number;

  @Field(()=>[String])
  urls: string[]

}
