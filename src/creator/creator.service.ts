import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';
import * as argon2 from 'argon2';

@Injectable()
export class CreatorService {
  constructor(private prisma: PrismaService) {}

  async create(createCreatorDto: CreateCreatorDto) {
    const { name, email, password, avatar } = createCreatorDto;
    const hashedPassword = await argon2.hash(password);
    const creator = await this.prisma.creator.create({
      data: {
        name,
        email,
        password: hashedPassword,
        avatar,
      },
    });
    delete creator.password;
    return creator;
  }

  async findAll() {
    const creators = await this.prisma.creator.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        avatar: true,
        isAvailable: true,
        videos: true,
      },
    });
    if (creators) {
      return { status: 'success', data: creators };
    } else {
      return new NotFoundException('No creators found');
    }
  }

  async findOne(id: number) {
    const creator = await this.prisma.creator.findFirstOrThrow({
      where: {
        id,
      },
      include: {
        videos: true,
      },
    });
    if (creator) {
      delete creator.password;
      return { status: 'success', data: creator };
    }
    return new NotFoundException('No creator found');
  }

  async update(id: number, updateCreatorDto: UpdateCreatorDto) {
    return await this.prisma.creator.update({
      where: {
        id,
      },
      data: updateCreatorDto,
    });
  }

  async remove(id: number) {
    try {
      return await this.prisma.creator.delete({
        where: {
          id,
        },
        include: {
          videos: true,
        },
      });
    } catch (error) {
      return new NotFoundException('No creator found');
    }
  }
}
