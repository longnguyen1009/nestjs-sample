import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './create-user.dto';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ){}

  getUsers(): Promise<any>{
    return new Promise(resolve => {
      resolve(this.userRepository.find());
    })
  }

  getUser(userId): Promise<any>{
    let id = Number(userId)
    return new Promise(resolve => {
      const userCheck = this.userRepository.findOne(id);
      if(!userCheck){
        throw new HttpException("User not exist", 404);
      }
      resolve(userCheck);
    })
  }

  addUser(user): Promise<any> {
    return new Promise(resolve => {
      this.userRepository.save(user);
      resolve(this.userRepository.find());
    })
  }

  deleteUser(userId): Promise<any>{
    let id = Number(userId);
    return new Promise(resolve => {
      const userCheck = this.userRepository.findOne(id);
      if(!userCheck){
        throw new HttpException('user not exist', 404);
      }
      this.userRepository.delete(userId);
      resolve(this.userRepository.find());
    })
  }

}

