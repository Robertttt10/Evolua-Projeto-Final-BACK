import { ApiProperty } from "@nestjs/swagger";
import { Entity } from "typeorm";

@Entity()
export class CreateUserDto {
    @ApiProperty()
    name?:string;
    @ApiProperty({ enum: ['Admin', 'Moderator', 'User']})
    userGroup: string;
    @ApiProperty()
    email:string;
    @ApiProperty()
    password:string;
    @ApiProperty()
    isActive?: boolean;
}


