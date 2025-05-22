import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction ,Request, Response} from 'express';

@Injectable()
export class BookMiddleware  implements NestMiddleware{
 use(req: Request, res: Response, next: NextFunction) {
    console.log('Request... middleware form book');
    next();
     
 }
}
