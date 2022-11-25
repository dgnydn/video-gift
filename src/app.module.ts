import { Module } from '@nestjs/common';
import { CreatorModule } from './creator/creator.module';
import { VideoModule } from './video/video.module';
import { CustomerModule } from './customer/customer.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [CreatorModule, VideoModule, CustomerModule, OrderModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
