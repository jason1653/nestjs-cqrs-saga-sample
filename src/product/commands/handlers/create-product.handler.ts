import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { ProductAggregate } from 'src/product/aggregates/product.aggregate';
import { Product } from 'src/product/entities/product.entity';
import { ProductStore } from 'src/product/stores/product.store';
import { CreateProductCommand } from '../impl/create-product.command';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  public constructor(
    private readonly publisher: EventPublisher,
    private readonly productStore: ProductStore,
  ) {}

  async execute(command: CreateProductCommand): Promise<any> {
    const { price, productNm } = command.createProductDto;
    const productEntity = new Product();
    productEntity.price = price;
    productEntity.productNm = productNm;

    const product = await this.productStore.register(productEntity);

    const productAggregate = this.publisher.mergeObjectContext(
      new ProductAggregate(product.seq, product.productNm, product.price),
    );

    productAggregate.registerProduct(product.price, product.productNm);
    productAggregate.commit();

    return product;
  }
}
