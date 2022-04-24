import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Auth {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    token: string;
    @Column()
    email: string;
    @Column()
    userGroup: string; 
    @Column()
    date_login: Date;
    @Column()
    date_logout: Date;
    @Column()
    isloggedIn: boolean;
}
