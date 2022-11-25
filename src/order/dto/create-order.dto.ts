import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  id: number;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  customer: number;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  video: number;

  @IsNotEmpty()
  @Transform(({ value }) => Number(value))
  price: number;

  status: string;
}
