import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGurard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.gurard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: any): any {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGurard)
  @Get('protected')
  getHello(@Request() req: any): string {
    return req.user;
  }
}
