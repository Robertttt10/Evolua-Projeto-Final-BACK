import { Module } from '@nestjs/common/decorators';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { MulterModule } from '@nestjs/platform-express';
const multer = require('multer')

@Module({
  imports: [TypeOrmModule.forFeature([Product]),
  MulterModule.register({
    dest: './uploads'
  }),
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule { }
