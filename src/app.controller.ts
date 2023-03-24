import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './dto/user.dto';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user/create')
  async createUser(@Body() userDto: UserDto): Promise<any> {
    return this.appService.createUser(userDto);
  }

  @Get('search')
  async search(
    @Query('word') word: string,
    @Query('userId') userId: string,
  ): Promise<any> {
    return this.appService.search(word, userId);
  }
}
