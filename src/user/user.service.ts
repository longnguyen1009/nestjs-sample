import { HttpException, Injectable } from '@nestjs/common';
import { USERS } from './user.mock';

@Injectable()
export class UserService {
  users = USERS;

  getUsers(): Promise<any>{
    return new Promise(resolve => {
      resolve(this.users);
    })
  }

  getUser(userId): Promise<any>{
    let id = Number(userId)
    return new Promise(resolve => {
      const userCheck = this.users.find(u => u.id === id);
      if(!userCheck){
        throw new HttpException("User not exist", 404);
      }
      resolve(userCheck);
    })
  }

  addUser(user): Promise<any> {
    return new Promise(resolve => {
      if(!this.users.find(u => u.id === user.id)){
        this.users.push(user);
      }
      resolve(this.users);
    })
  }

  deleteUser(userId): Promise<any>{
    let id = Number(userId);
    return new Promise(resolve => {
      const userCheckIndex = this.users.findIndex(u => u.id === id);
      if(userCheckIndex === -1){
        throw new HttpException('user not exist', 404);
      }

      this.users.splice(userCheckIndex, 1);
      resolve(this.users);
    })
  }


}
