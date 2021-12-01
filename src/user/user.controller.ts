import { Controller, Get, Param, Post, Body, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateCourseDto } from './create-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    const users = this.userService.getUsers();
    return users;
  }

  @Get(':userId')
  async getUser(@Param('userId') userId){
    const user = await this.userService.getUser(userId);
    return user;
  }

  @Post()
  async addUser(@Body() createUserDto: CreateCourseDto){
    const user = await this.userService.addUser(createUserDto);
    return user;
  }

  @Delete()
  async deleteUser(@Query() query){
    const users = await this.userService.removeUser(query.userId);
    return users;
  }

}
