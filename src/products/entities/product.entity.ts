import { isEmpty } from "rxjs";
import { Column, Entity, IsNull, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn("uuid")
    product_id:string;
    @Column()
    product_name: string;
    @Column()
    product_type: string;
    @Column({nullable:true})
    product_description: string;
    @Column()
    product_number: string;
    @Column({nullable:true})
    image?:string;
    @Column()
    quantity: number;
    @Column()
    price: number;
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