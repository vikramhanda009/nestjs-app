import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, BadRequestException, UseGuards, UseInterceptors } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookPipe } from 'src/pipes/book.pipe';
import { BookGuard } from './book.guard';
import { AppInterceptor } from 'src/app.interceptor';
import { AuthGuard } from '@nestjs/passport';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body(new BookPipe) createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  @UseGuards(new BookGuard())
  @UseInterceptors(AppInterceptor)
  @UseGuards(AuthGuard('local'))
  findOne(@Param('id',ParseIntPipe) id: number) {
    // throw new BadRequestException({
    //   status: 400,
    //   error:"Bad Request but good men"

    // });
    return this.bookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
