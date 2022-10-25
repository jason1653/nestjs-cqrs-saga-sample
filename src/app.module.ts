import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogModule } from './catalog/catalog.module';
import { typeOrmConfig } from './typeorm.config';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';

console.log(typeOrmConfig);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development', '.env.proction'],
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    CatalogModule,
    ProductModule,
    UsersModule,
  ],
})
export class AppModule {}
