import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LanguageMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
      const lang = req.headers['Accept-Language'] || 'en'
      req.language = lang;
      console.log(lang)
    next();
  }
}
