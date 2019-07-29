import { Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout, NestSchedule } from 'nest-schedule';

@Injectable() // Only support SINGLETON scope
export class ScheduleService extends NestSchedule {    
  @Cron('* * * * *', {
    immediate: true
  })
  async cronJob() {
    console.log('executing cron job every minute');
  }
}