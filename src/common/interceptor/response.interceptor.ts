import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { I18nService } from 'nestjs-i18n';
import { translate } from '@/utils/translate';

interface PaginationMeta {
  total: number;
  startCursor?: string;
  endCursor?: string;
}

interface ResponseFormat<T> {
  status?: boolean;
  statusCode?: number;
  path?: string;
  message?: string;
  data: T;
  timestamp?: string;
  meta?: PaginationMeta;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, ResponseFormat<T>> {

  constructor(private readonly i18n: I18nService){}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctxType = context.getType<'http' | 'graphql' | string>();

    return next.handle().pipe(
      map((res: any) => {
        if (ctxType === 'http') {
          return this.buildHttpResponse(res, context);
        } else if (ctxType === 'graphql') {
          return this.buildGraphqlResponse(res, context);
        } else {
          return res;
        }
      }),
  )}

  private buildGraphqlResponse(res: any , context: ExecutionContext){
    const gqlCtx = GqlExecutionContext.create(context);
    const response = gqlCtx.getContext()?.res
    // const mess = translate(this.i18n,response?.)


  }

  private buildHttpResponse(res: any, context: ExecutionContext): ResponseFormat<T> {
    const httpCtx = context.switchToHttp();
    const request = httpCtx.getRequest();
    const response = httpCtx.getResponse();

    return {
      status: true,
      message: res?.message || 'Success',
      path: request?.url,
      statusCode: response?.statusCode || 200,
      data: res?.data || res,
      timestamp: new Date().toISOString(),
    };
  }
}
