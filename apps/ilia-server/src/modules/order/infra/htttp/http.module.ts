import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/OrdersController';
import { OrdersService } from '../../services/OrdersService';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class HttpOrderModule {}
