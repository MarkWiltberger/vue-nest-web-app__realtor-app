import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';

export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, handler: CallHandler) {
    const request = context.switchToHttp().getRequest();
    return handler.handle();
  }
}
