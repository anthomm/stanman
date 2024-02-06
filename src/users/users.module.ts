import { Module, Provider } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';
import { CurrentUserInterceptor } from './interceptors/current-user.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';

const TOM = TypeOrmModule.forFeature([User]);
const GlobalUserInterceptor = {
  provide: APP_INTERCEPTOR,
  useClass: CurrentUserInterceptor,
} as Provider;

@Module({
  imports: [TOM],
  controllers: [UsersController],
  providers: [UsersService, AuthService, GlobalUserInterceptor],
})
export class UsersModule {}
