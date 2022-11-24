import { Module } from '@nestjs/common';
import { CreatorService } from './creator.service';
import { CreatorController } from './creator.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CreatorController],
  providers: [CreatorService],
  imports: [PrismaModule],
})
export class CreatorModule {}
