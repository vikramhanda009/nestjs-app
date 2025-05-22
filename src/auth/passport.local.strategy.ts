import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from '../users/users.service';
import { User } from 'src/users/user.entity';

@Injectable()
export class PassportLocalStrategy  extends PassportStrategy(Strategy){
    constructor(private readonly userService: UserService) {
        super();
    }
    validate(username: string, password: string): User {
    const user =  this.userService.getUserByName(username);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
    
}