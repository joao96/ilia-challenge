import { MiddlewareConsumer, Module } from '@nestjs/common';
import { HttpCustomerModule } from './modules/customer/infra/http/http.module';
import { ErrorMiddleware } from './shared/http/middlewares/ErrorMiddleware';
import { HttpOrderModule } from './modules/order/infra/htttp/http.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpCustomerModule, HttpOrderModule, ConfigModule.forRoot()],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ErrorMiddleware).forRoutes('*');
  }
}
