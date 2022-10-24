import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { delay, map, Observable } from 'rxjs';
import { ProductWasAddedEvent } from '../events/impl/product-was-added.event';

@Injectable()
export class ProductSaga {
  @Saga()
  productWasAdded = (events$: Observable<any>): any => {
    return events$.pipe(
      ofType(ProductWasAddedEvent),
      delay(1000),
      map((event) => {
        Logger.log('saga call AddProductToCatalogCommand');
      }),
    );
  };
}
