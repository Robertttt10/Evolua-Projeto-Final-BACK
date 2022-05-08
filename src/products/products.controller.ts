import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common/decorators';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiTags } from '@nestjs/swagger';
import { UploadedFile, UseInterceptors } from '@nestjs/common/decorators';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Post('create')  
  create(@Body()createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Post('new-product')  
  @UseInterceptors(FileInterceptor('image'))
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() createProductDto: CreateProductDto,) {    
    console.log(file);
    return this.productsService.newProduct(createProductDto, file)
  }

  @Post()
  findAll(@Body() teste: string) {
    return this.productsService.findAll(teste);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
