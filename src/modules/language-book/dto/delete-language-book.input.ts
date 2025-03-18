import { CreateLanguageBookInput } from './create-language-book.input';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DeleteLanguageBookInput extends CreateLanguageBookInput {}
