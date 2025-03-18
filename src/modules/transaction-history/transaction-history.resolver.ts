import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TransactionHistoryService } from './transaction-history.service';
import { TransactionHistory } from './entities/transaction-history.entity';
import { CreateTransactionHistoryInput } from './dto/create-transaction-history.input';

@Resolver(() => TransactionHistory)
export class TransactionHistoryResolver {
  constructor(private readonly transactionHistoryService: TransactionHistoryService) {}

  @Mutation(() => TransactionHistory)
  createTransactionHistory(@Args('createTransactionHistoryInput') createTransactionHistoryInput: CreateTransactionHistoryInput) {
    return this.transactionHistoryService.create(createTransactionHistoryInput);
  }

  @Query(() => [TransactionHistory], { name: 'transactionHistory' })
  findAll() {
    return this.transactionHistoryService.findAll();
  }

}
