import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdatePasswordDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    email?: string;
    @ApiProperty()
    password?: string;
}

export class UpadteIsActiveDto extends PartialType(CreateUserDto) {
    @ApiProperty()
    email?: string;
    @ApiProperty()
    isActive?: boolean;
}
