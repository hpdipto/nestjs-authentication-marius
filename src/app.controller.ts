import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGurard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.gurard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: any): any {
    return req.user;
  }

  @UseGuards(AuthenticatedGurard)
  @Get('protected')
  getHello(@Request() req: any): string {
    return req.user;
  }
}
