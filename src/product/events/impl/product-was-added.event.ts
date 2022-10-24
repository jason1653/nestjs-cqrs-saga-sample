import { Logger } from '@nestjs/common';

export class ProductWasAddedEvent {
  constructor(
    public readonly price: number,
    public readonly productNm: string,
  ) {
    Logger.log('ProductWasAddedEvent called');
  }
}
