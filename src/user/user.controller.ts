import { Controller } from '@nestjs/common';
import { Get,Param,  Post, Delete, Query, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './create-user.dto';


@Controller('user')
export class UserController {
  constructor(private userServices: UserService){}

  @Get()
  async getUsers(){
    const users = await this.userServices.getUsers();
    return users;
  }

  @Get(':userId')
  async getUser(@Param('userId') userId){
    const user = this.userServices.getUser(userId);
    return user;
  }

  @Post()
  async addUser(@Body() createUserDto: CreateUserDto){
    const uses = await this.userServices.addUser(createUserDto);
    return uses;
  }

  @Delete()
  async deleteUser(@Query() query){
    const uses = this.userServices.deleteUser(query.userId);
    return uses;
  }
}
