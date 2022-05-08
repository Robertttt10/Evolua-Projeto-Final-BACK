import { Injectable } from '@nestjs/common/decorators';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly repository: Repository<Product>,
  ) { }

  async create(createProductDto: CreateProductDto) {
    const result = await this.repository.save({
      product_name: createProductDto.product_name,
      product_type: createProductDto.product_type,
      product_description: createProductDto.product_description,
      product_number: createProductDto.product_number,
      image: createProductDto.image,
      quantity: createProductDto.quantity,
      price: createProductDto.price,
    })
    return result
  }

  async newProduct(createProductDto:CreateProductDto, image){
    const resultCreate = await this.repository.save({
      product_name: createProductDto.product_name,
      product_type: createProductDto.product_type,
      product_description: createProductDto.product_description,
      product_number: createProductDto.product_number,
      image: createProductDto.image,
      quantity: createProductDto.quantity,
      price: createProductDto.price,
    })
    console.log(resultCreate.product_id);

    console.log(image);
    
    
    const result = await this.repository.update({ product_number: resultCreate.product_id }, { image: image })

    console.log(result);
     
  }

  async findAll(teste) {

    console.log(teste);
    
    const result = await this.repository
      .createQueryBuilder("product_name")
      .where("product_name.product_name = :id", { id: teste.product_name })
      .execute()
    console.log(result);

  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
