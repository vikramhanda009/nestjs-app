
import { NestInterceptor, CallHandler, ExecutionContext, Injectable} from '@nestjs/common';
import { log } from 'console';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements NestInterceptor{ 
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        // throw new Error('intercept .');
        const ctx = context.switchToHttp();
        const req = ctx.getRequest<Request>();
        const res = ctx.getResponse();
        const now = new Date();
        console.log(`Request... ${req.method} ${req.url} ${now.toISOString()}`);
        // console.log("i am in interspecter",res);
        
        return next.handle();
    }

}