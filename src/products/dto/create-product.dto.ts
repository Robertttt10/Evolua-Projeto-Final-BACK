import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";

export class CreateProductDto {    
    @ApiProperty()
    @Column()
    product_name: string;
    @ApiProperty()
    @Column()
    product_description: string;
    @ApiProperty()
    @Column()
    product_number: string;
    @ApiProperty()
    @Column()
    color:string;
    @ApiProperty()
    @Column()
    quantity: number
    @ApiProperty()
    @Column()
    price: string;
}
