import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';

@Injectable()
export class VideoService {
  constructor(private prisma: PrismaService) {}

  async create(createVideoDto: CreateVideoDto) {
    const { title, url, published, author } = createVideoDto;
    const video = await this.prisma.video.create({
      data: {
        title,
        url,
        published,
        author: {
          connect: {
            id: author.id,
          },
        },
      },
    });
    return video;
  }

  findAll() {
    return this.prisma.video.findMany({
      include: {
        author: true,
        Order: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} video`;
  }

  update(id: number, updateVideoDto: UpdateVideoDto) {
    return `This action updates a #${id} video`;
  }

  remove(id: number) {
    return `This action removes a #${id} video`;
  }
}
