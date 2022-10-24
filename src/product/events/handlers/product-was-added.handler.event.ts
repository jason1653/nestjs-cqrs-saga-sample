import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ProductWasAddedEvent } from '../impl/product-was-added.event';

@EventsHandler(ProductWasAddedEvent)
export class ProductWasAddedHandlerEvent
  implements IEventHandler<ProductWasAddedEvent>
{
  handle(event: ProductWasAddedEvent) {
    return event;
  }
}
