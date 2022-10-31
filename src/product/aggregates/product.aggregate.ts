import { AggregateRoot } from '@nestjs/cqrs';
import { ProductWasAddedEvent } from '../events/impl/product-was-added.event';

export class ProductAggregate extends AggregateRoot {
  constructor(
    public readonly seq: number,
    public readonly productNm: string,
    public readonly price: number,
  ) {
    super();
  }

  public registerProduct(price: number, productNm: string) {
    this.apply(new ProductWasAddedEvent(price, productNm));
  }
}
