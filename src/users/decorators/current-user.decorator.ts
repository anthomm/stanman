import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (_data: never, context: ExecutionContext) => {
    // This decorator assumes an interceptor has run beforehand and set the request.
    const req = context.switchToHttp().getRequest();
    return req.currentUser;
  },
);
