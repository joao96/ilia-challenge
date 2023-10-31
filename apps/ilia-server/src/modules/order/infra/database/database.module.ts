import { Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { IOrderRepository } from '../../repositories/IOrderRepository';
import { PrismaOrderRepository } from './prisma/repositories/PrismaOrderRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: IOrderRepository,
      useClass: PrismaOrderRepository,
    },
  ],
  exports: [IOrderRepository],
})
export class DatabaseModule {}
