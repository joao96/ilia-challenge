import { Module } from '@nestjs/common';
import { ICustomerRepository } from '../../repositories/ICustomerRepository';
import { PrismaCustomerRepository } from './prisma/repositories/PrismaCustomerRepository';
import { PrismaService } from 'src/shared/prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: ICustomerRepository,
      useClass: PrismaCustomerRepository,
    },
  ],
  exports: [ICustomerRepository],
})
export class DatabaseModule {}
