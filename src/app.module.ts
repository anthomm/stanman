import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { ReportsService } from './reports/reports.service';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';

const TOModule = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [],
  synchronize: true,
});

@Module({
  imports: [UsersModule, ReportsModule, TOModule],
  controllers: [AppController],
  providers: [AppService, UsersService, ReportsService],
})
export class AppModule {}
