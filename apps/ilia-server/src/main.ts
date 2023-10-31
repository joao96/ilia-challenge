import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableShutdownHooks();

  const yamlFile = fs.readFileSync('./api.yaml', 'utf8');
  const swaggerDocument = yaml.load(yamlFile);

  SwaggerModule.setup('/api', app, swaggerDocument);

  await app.listen(3001);
}
bootstrap();
