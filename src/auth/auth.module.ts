import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from 'src/configs/google.strategy';
import { FacebookStrategy } from 'src/configs/facebook.strategy';

@Module({
  providers: [AuthService, GoogleStrategy, FacebookStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
