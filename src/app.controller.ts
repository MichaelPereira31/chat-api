import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  index(@Param() payload: any): string {
    console.log({ payload }, 'GET');
    return this.appService.getHello();
  }

  @Post()
  getHello(@Body() payload: any): string {
    console.log({ payload }, 'POST');
    return this.appService.getHello();
  }
}
