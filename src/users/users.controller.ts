import { Body, Controller, Post } from '@nestjs/common';

@Controller('auth')
export class UsersController {
  @Post('/signup')
  createUser(@Body() body: any) {
    console.log(body);
  }
}
