import { CreateCreatorDto } from 'src/creator/dto/create-creator.dto';
import { CreateCustomerDto } from 'src/customer/dto/create-customer.dto';

export class CreateVideoDto {
  title: string;
  url: string;
  published: boolean;
  author: CreateCreatorDto;
  customer: CreateCustomerDto;
}
