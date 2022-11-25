import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await this.prisma.customer.create({
      data: {
        ...createCustomerDto,
      },
    });

    if (customer) {
      return { status: 'success', data: customer };
    } else {
      return new HttpException(
        { status: 'error', message: 'Customer not created' },
        500,
      );
    }
  }

  findAll() {
    return this.prisma.customer.findMany({
      include: {
        Order: true,
      },
    });
  }

  async findOne(id: number) {
    const customer = await this.prisma.customer.findFirst({
      where: {
        id,
      },
    });
    if (customer) {
      return { status: 'success', data: customer };
    } else {
      return new HttpException(
        { status: 'error', message: 'Customer not found' },
        404,
      );
    }
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const customer = await this.prisma.customer.update({
      where: {
        id,
      },
      data: {
        ...updateCustomerDto,
      },
    });

    if (customer) {
      return { status: 'success', data: customer };
    } else {
      return new HttpException(
        { status: 'error', message: 'Customer not updated' },
        500,
      );
    }
  }

  async remove(id: number) {
    const customer = await this.prisma.customer.delete({
      where: {
        id,
      },
    });
    if (customer) {
      return { status: 'success', data: customer };
    } else {
      return new HttpException(
        { status: 'error', message: 'Customer not deleted' },
        500,
      );
    }
  }
}
