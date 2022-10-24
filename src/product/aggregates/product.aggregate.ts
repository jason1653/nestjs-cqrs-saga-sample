import { AggregateRoot } from '@nestjs/cqrs';
import { ProductWasAddedEvent } from '../events/impl/product-was-added.event';

export class ProductAggregate extends AggregateRoot {
  constructor(
    private readonly seq: number,
    private readonly productNm: string,
    private readonly price: number,
  ) {
    super();
  }

  public registerProduct(price: number, productNm: string) {
    this.apply(new ProductWasAddedEvent(price, productNm));
  }
}
