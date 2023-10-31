import { Module } from '@nestjs/common';
import { CustomersController } from './controllers/CustomersController';
import { CustomersService } from '../../services/CustomersService';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class HttpCustomerModule {}
