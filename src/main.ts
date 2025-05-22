import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
function globelMiddleware1(req:Request, res:Response, next:Function) {
  console.log('global middleware1');
  next();
  
}
function globelMiddleware2(req:Request, res:Response, next:Function) {
  console.log('global middleware2');
  next();
  
}
async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globelMiddleware1);
  app.use(globelMiddleware2);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
