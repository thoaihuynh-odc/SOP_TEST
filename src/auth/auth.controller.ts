import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) {}
  
    @Get('google/callback')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req) {
      return this.authService.loginWithGoogle(req)
    }

    @Get("facebook")
    @UseGuards(AuthGuard("facebook"))
    async facebookAuth(@Req() req){}

    @Get("facebook/callback")
    @UseGuards(AuthGuard("facebook"))
    async facebookLoginRedirect(@Req() req){
      return this.authService.loginWithFacebook(req)
    }

    @Get('fail')
    authFail(@Req() req) {
      return this.authService.loginFail(req)
    }
}
