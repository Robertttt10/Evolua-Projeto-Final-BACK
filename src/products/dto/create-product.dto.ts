import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity } from "typeorm";

export class CreateProductDto {    
    @ApiProperty()
    @Column()
    product_name: string;
    @ApiProperty()
    @Column()
    product_type: string;
    @ApiProperty()
    @Column({nullable:true})
    product_description?: string;
    @ApiProperty()
    @Column()
    product_number: string;
    @ApiProperty()
    @Column({nullable:true})
    image?:string;
    @ApiProperty()
    @Column()
    quantity: number
    @ApiProperty()
    @Column()
    price: number;
}
