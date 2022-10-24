import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
  public constructor(private readonly _productService: ProductService) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this._productService.createProduct(createProductDto);
  }
}
