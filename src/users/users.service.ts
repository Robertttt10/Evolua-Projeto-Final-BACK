import { Body, Injectable, Param, Patch } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpadteIsActiveDto, UpdatePasswordDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    //Exists?
    const exists = await this.repository.findOne({ where: { email: createUserDto.email } });
    console.log(exists);
    if (exists) {
      if (!exists.isActive) {
        return 'Usuário Inativo, favor entre em contato com o suporte ou seu administrador'
      } else {
        return 'Usuário já cadastrado na base';
      }
    }
    //Create
    const result = await this.repository.save({
      name: createUserDto.name,
      email: createUserDto.email,
      userGroup: createUserDto.userGroup,
      password: createUserDto.password,
    });

    return 'Usuário criado'
  }

  findAll() {
    const result = this.repository.find()
    return result;
  }

  async findByEmail(email: string) {
    const result = await this.repository.findOne({ where: { email: email } });
    return result
  }

  async updatePassword(updatePasswordDto: UpdatePasswordDto) {
    const result = await this.repository.update({ email: updatePasswordDto.email }, { password: updatePasswordDto.password })
  }

  async updateIsActive(upadteIsActiveDto: UpadteIsActiveDto) {
    const result = await this.repository.update({ email: upadteIsActiveDto.email }, { isActive: upadteIsActiveDto.isActive })
  }
}
