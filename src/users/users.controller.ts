import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePasswordDto, UpadteIsActiveDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiProperty, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/jwt.auth.guard';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('createUsers')
  create(@Param() @Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @UseGuards(JwtGuard)
  @Patch('password')
  async updatePassword(@Body() updatePasswordDto: UpdatePasswordDto ) {
    const result = await this.usersService.updatePassword(updatePasswordDto);
    return result
  }
  
  @UseGuards(JwtGuard)
  @Patch('isActive')
  async updateIsActive(@Body() upadteIsActiveDto: UpadteIsActiveDto ) {
    const result = await this.usersService.updateIsActive(upadteIsActiveDto);
    return 
  }
}
