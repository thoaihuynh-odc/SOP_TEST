import { Injectable } from '@nestjs/common';
import * as passport from 'passport';
import { config } from 'dotenv';

config();

@Injectable()
export class AuthService {

  async loginWithGoogle(req) {
    // return passport.authenticate('google', {
    //   failureRedirect: `${process.env.BASE_URL}/login`,
    //   successRedirect: `${process.env.BASE_URL}/dashboard`,
    // })(req);
    if (!req.user) {
      return {
        message: 'Login failed',
      };
    } else {
      return req.user;
     }
  }

  async loginWithFacebook(req) {
    // return passport.authenticate('facebook', {
    //   failureRedirect: `${process.env.BASE_URL}/login`,
    //   successRedirect: `${process.env.BASE_URL}/dashboard`,
    // })(req);
    if (!req.user) {
      return {
        message: 'Login failed',
      };
    } else {
      return req.user;
     }
  }

  async loginFail(req) {
    return {
      message: 'Login failed',
    };
  }
}
