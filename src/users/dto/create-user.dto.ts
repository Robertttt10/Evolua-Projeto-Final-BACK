import { ApiProperty } from "@nestjs/swagger";
import { Entity } from "typeorm";

@Entity()
export class CreateUserDto {
    @ApiProperty()
    name:string;
    @ApiProperty({ enum: ['admin', 'user']})
    userGroup: string;
    @ApiProperty()
    email:string;
    @ApiProperty()
    password:string;
    @ApiProperty()
    isActive?: boolean;
}


