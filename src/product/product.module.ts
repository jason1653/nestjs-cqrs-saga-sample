import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCommandHandlers } from './commands';
import { ProductController } from './controller/product.controller';
import { Product } from './entities/product.entity';
import { ProductEventHandlers } from './events';
import { ProductService } from './services/product.service';
import { ProductStore } from './stores/product.store';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [
    ...ProductCommandHandlers,
    ProductService,
    ProductStore,
    ...ProductEventHandlers,
  ],
})
export class ProductModule {}
