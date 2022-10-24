import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'productNm: 필수값입니다' })
  productNm: string;

  @Type(() => Number)
  @IsInt({ message: 'price: 필수값입니다' })
  price: number;
}
