import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateProductCommand } from '../commands/impl/create-product.command';
import { CreateProductDto } from '../dtos/create-product.dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly _commandBus: CommandBus, // private readonly _queryBus: QueryBus,
  ) {}

  public async createProduct(createProductDto: CreateProductDto) {
    return this._commandBus.execute(new CreateProductCommand(createProductDto));
  }
}
