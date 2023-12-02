import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Users } from './users.entity';

export const getUser = createParamDecorator(
  (_data, ctx: ExecutionContext): Users => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);
