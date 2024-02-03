import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('/signup')
  createUser(@Body() body: CreateUserDto) {
    const x = this.usersService.create(body.email, body.password);
    console.log(x);
  }

  @Get('/:id')
  findUser(@Param('id') id: string) {
    const pid = parseInt(id);
    return this.usersService.findOne(pid);
  }

  @Get()
  findAllUsers(@Query('email') email: string) {
    return this.usersService.find(email);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string) {
    const pid = parseInt(id);
    return this.usersService.remove(pid);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
    const pid = parseInt(id);
    return this.usersService.update(pid, body);
  }
}
