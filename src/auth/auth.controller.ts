import { Controller, Get, Post, Body, Patch, Param, Delete, Scope } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('Authentication')
@Controller({ path: 'auth', scope: Scope.REQUEST })
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    ) { }

  @Post()
  async loginb(@Body() loginDto: LoginDto) {
    const user = await this.userService.findByEmail(loginDto.email);
    console.log(user);
    
    if (user && user.password === loginDto.password) {
      const payload = { 
        email: user.email, 
        sub: user.id,
      }
      return { access_token: this.jwtService.sign(payload) }
    }else{
      return 'Usuário e/ou senha incorretos'
    }
  }

}
