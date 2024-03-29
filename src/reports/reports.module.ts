import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import { Report } from './entities/report.entity';

const TOM = TypeOrmModule.forFeature([Report]);

@Module({
  imports: [TOM],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
