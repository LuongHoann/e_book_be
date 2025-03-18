import { ObjectType, Field } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { Data } from './type';

@ObjectType('res')
export class ResponseAPI<T> {
  @Field({ nullable: true })
  StatusCode: number;
  @Field({ nullable: true })
  MessageCode: string;
  @Field(() => GraphQLJSON, { nullable: true })
  Data: Data<T> ;
  @Field(() => GraphQLJSON, { nullable: true })
  FailedItems: { item: string}[] | null;

  constructor(
    statusCode: number,
    messageCode: string,
    Data?: Data<T> | null ,
    FailedItems?: { item: string}[] | null,
  ) {
    (this.StatusCode = statusCode),
      (this.MessageCode = messageCode);
      if(Data){
        this.Data = Data
      }
      if(FailedItems){
        this.FailedItems = FailedItems
      }
  }
}
