import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductStore {
  public constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  public async register(productEntity: Product) {
    return this.create(productEntity);
  }

  private async create(productEntity: Product) {
    const product = this.productRepository.create(productEntity);
    return this.productRepository.save(product);
  }
}
