import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

export class UserInterceptor implements NestInterceptor {
  /* intercept(context: ExecutionContext, handler: CallHandler) {
    return handler.handle();
  } */

  intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();
    console.log({ request });
    return handler.handle();
  }
}
