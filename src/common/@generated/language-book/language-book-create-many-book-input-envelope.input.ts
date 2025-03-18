import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { language_bookCreateManyBookInput } from './language-book-create-many-book.input';
import { Type } from 'class-transformer';

@InputType()
export class language_bookCreateManyBookInputEnvelope {

    @Field(() => [language_bookCreateManyBookInput], {nullable:false})
    @Type(() => language_bookCreateManyBookInput)
    data!: Array<language_bookCreateManyBookInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
