import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderDto: CreateOrderDto) {
    return await this.prisma.order.create({
      data: {
        customer: {
          connect: {
            id: Number(createOrderDto.customer),
          },
        },
        video: {
          connect: {
            id: Number(createOrderDto.video),
          },
        },
        price: Number(createOrderDto.price),
        status: createOrderDto.status,
      },
    });
  }

  async findAll() {
    return await this.prisma.order.findMany({
      include: {
        customer: true,
        video: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.order.findFirst({
      where: {
        id: id,
      },
      include: {
        customer: true,
        video: true,
      },
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.prisma.order.update({
      where: {
        id: id,
      },
      data: {
        status: updateOrderDto.status,
        customer: {
          connect: {
            id: updateOrderDto.customer,
          },
        },
        video: {
          connect: {
            id: updateOrderDto.video,
          },
        },
        price: updateOrderDto.price,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.order.delete({
      where: {
        id,
      },
    });
  }
}
