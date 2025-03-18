import { ResponseAPI } from '@/types/http.entity'; // Import kiểu dữ liệu ResponseAPI
import { Data } from '@/types/type';
import { I18nContext, I18nService } from 'nestjs-i18n';

export function buildResponse<T>(
    i18n: I18nService,
    messageCode: string,
    statusCode: number,
    data?: Data<T>, // Data có thể là T, T[] hoặc null
    FailedItems?: { item: string }[] | null
): ResponseAPI<T> {
  const message: string = i18n.t(messageCode, { lang: I18nContext.current()?.lang });
  return new ResponseAPI<T>(statusCode ,message, data , FailedItems);
}