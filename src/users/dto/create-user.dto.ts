import { Entity } from "typeorm";

@Entity()
export class CreateUserDto {
    name?:string;
    email:string;
    password:string;

}
