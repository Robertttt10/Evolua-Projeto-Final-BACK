import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    product_id:string;
    @Column
    product_name: string;
    @Column
    product_description: string;
    @Column
    product_number: string;
    @Column
    color:string;
    @Column
    quantity: number
    @Column
    price: string;
}
