import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { config } from 'dotenv';
import { AuthService } from 'src/auth/auth.service';
import { Profile } from 'passport-facebook';
config();

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(private readonly authService: AuthService) {
    super({
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: `${process.env.BASE_URL}/auth/facebook/callback`,
      scope: "email",
      profileFields: ["emails", "name"],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile, done: Function) {
    try {
      const { name, emails } = profile;
      const user = {
        email: emails[0].value,
        firstName: name.givenName,
        lastName: name.familyName,
        accessToken,
      };
     
      done(null, user);
    } catch (err) {
      done(err, false);
    }
  }
}
