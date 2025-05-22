import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { plainToInstance} from "class-transformer";
import { CreateBookDto } from "src/book/dto/create-book.dto";
import {Validate} from "class-validator";

export class BookPipe implements PipeTransform  {
  /**
   * @description
   * This method is used to transform the book data
   * @param book
   * @returns
   */
 async transform(value: any, metadata: ArgumentMetadata):Promise<any> {
    console.log("ArgumentMetadata",metadata);
    // const bookClass = plainToInstance(CreateBookDto, value);
    // const errors = await Validate(bookClass);
    //   if(errors.length > 0) {
    //     throw new BadRequestException('Invalid book id')
    //   } else {
    //     return value
    //   }
  }
//   transform(book: any) {
//     return {
//       id: book.id,
//       title: book.title,
//       author: book.author,
//       price: book.price,
//       description: book.description,
//       publishedDate: book.publishedDate,
}
