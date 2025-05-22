import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  
    public users:User[]=[
        {
        username:"user1",
        password:"123456789",
        email:"user1@gmail.com",
    },
     {
        username:"user2",
        password:"123456789",
        email:"user2@gmail.com",
    }
]
    getUserByName(username:string):any{
        return this.users.find((user)=>user.username===username)
    }
}
