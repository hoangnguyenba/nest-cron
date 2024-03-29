import { Module } from '@nestjs/common';
import { ScheduleModule } from 'nest-schedule';
import { ScheduleService } from './schedule.service';

@Module({
  imports: [
    ScheduleModule.register(),
  ],
  providers: [ScheduleService],
})
export class AppModule {}
