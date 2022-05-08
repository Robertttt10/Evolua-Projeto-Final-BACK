import { PartialType } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
    @Column()
    product_name: string;
    @Column()
    product_description?: string;
    @Column()
    product_number: string;
    @Column()
    image:string;
    @Column()
    quantity: number
    @Column()
    price: number;
}
