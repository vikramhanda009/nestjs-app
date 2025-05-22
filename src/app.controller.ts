import { Controller, Delete, Get, Post, Put ,Param, UseGuards} from '@nestjs/common';
import { BookService } from './services/bookService';
import { AuthGuard } from '@nestjs/passport';

@Controller('book')
export class BookController{
     constructor(private bookService:BookService) {}
    @Post('/add')
    add():string{
        return this.bookService.add()

    }
    @Put('/update')
    update():string{
        return this.bookService.update()
    }
    @Delete('/delete')
    Delete():string{
        return this.bookService.Delete()

    }
    @Get('/find')
    @UseGuards(AuthGuard('local'))
    find():string{
        return this.bookService.find()

    }
}