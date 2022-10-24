import { ICommand } from '@nestjs/cqrs';
import { CreateProductDto } from 'src/product/dtos/create-product.dto';

export class CreateProductCommand implements ICommand {
  public constructor(public readonly createProductDto: CreateProductDto) {}
}
