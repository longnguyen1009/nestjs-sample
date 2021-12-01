import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ){}


  getUsers(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.userRepository.find());
    })
  }

  getUser(userId): Promise<any> {
    let id = Number(userId);
    return new Promise(resolve => {
      const user = this.userRepository.findOne(id);
      if(!user){
        throw new HttpException('User not exist', 404)
      }
      resolve(user);
    })
  }

  addUser(user): Promise<any> {
    return new Promise(resolve => {
      this.userRepository.save(user);
      resolve(this.userRepository.find());
    })
  }

  removeUser(userId): Promise<any>{
    let userid  = Number(userId);
    return new Promise(resolve => {
      let user = this.userRepository.findOne(userid);
      if(!user){
        throw new HttpException('Uses does not exist', 404);
      }
      this.userRepository.delete(userid);
      resolve(this.userRepository.find())
    })
  }

}
