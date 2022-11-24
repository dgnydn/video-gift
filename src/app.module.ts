import { Module } from '@nestjs/common';
import { CreatorModule } from './creator/creator.module';
import { VideoModule } from './video/video.module';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [CreatorModule, VideoModule, CustomerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
