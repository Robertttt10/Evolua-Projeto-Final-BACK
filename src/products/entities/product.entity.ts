import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    product_id:string;
    @Column()
    product_name: string;
    @Column()
    product_description: string;
    @Column()
    product_number: string;
    @Column()
    color:string;
    @Column()
    quantity: number
    @Column()
    price: string;
}



/* @Entity()
export class Order {
    @PrimaryGeneratedColumn()
    product_Order:string;
    @Column()
    product_id:string;
    @Column()
    product_name: string;
    @Column()
    product_description: string;
    @Column()
    color:string;
    @Column()
    quantity: number
    @Column()
    price: string;
} */