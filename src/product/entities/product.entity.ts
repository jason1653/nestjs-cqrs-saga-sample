import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PRODUCT')
export class Product {
  @PrimaryGeneratedColumn({ name: 'SEQ' })
  seq: number;

  @Column('varchar', { name: 'PRODUCT_NM', length: 50 })
  productNm: string;

  @Column('int', { name: 'PRICE' })
  price: number;
}
