import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { AuthService } from './auth.service';

const TOM = TypeOrmModule.forFeature([User]);

@Module({
  imports: [TOM],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
})
export class UsersModule {}
