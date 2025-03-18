import { GraphQLError } from 'graphql';
import { I18nService  , I18nContext} from 'nestjs-i18n';

export class GraphQLCustomError extends GraphQLError {
  constructor(
    i18n: I18nService,
    messageCode: string,
    statusCode: number,
  ) {
    const translatedMessage: string = i18n.t(messageCode, { lang: I18nContext.current()?.lang });
    super(translatedMessage, {
      extensions: {
        code: statusCode,
        // originalMessage: messageCode, // Giữ lại mã gốc để debug nếu cần
      },
    });
  }
}
