import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { ChatModule } from './chat/chat.module';
import { BookService } from './services/bookService';
import {  BookController } from './app.controller';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [UsersModule, OrdersModule, ChatModule, BookModule,UsersModule,AuthModule],
  controllers: [BookController],
  providers: [BookService],
  exports:[],
})
export class RootModule {
  constructor(){
    console.log("RootModule");

  }

}
