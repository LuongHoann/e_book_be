import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
 
 type Response<T> = {
  status: boolean;
  statusCode: number;
  path: string;
  message?: string;
  data: T;
  timestamp: string;
  meta?: PaginationMeta;
}

interface PaginationMeta {
  total: number;
  startCursor?: string;
  endCursor?: string;
}
 
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
 
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((res: unknown) => this.responseHandler(res, context)),
      catchError((err: HttpException) =>
        throwError(() => this.errorHandler(err, context)),
      ),
    );
  }
 
  errorHandler(exception: HttpException, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
 
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
 
    response.status(status).json({
      status: false,
      statusCode: status,
      path: request.url,
      message: exception.message,
      result: exception,
      timestamp: new Date().toISOString(),
    });
  }
 
  responseHandler(res: any, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = response.statusCode;
 
    return {
      status: true,
      path: request.url,
      statusCode,
      data: res,
      timestamp: new Date().toISOString(),
    };
  }
}