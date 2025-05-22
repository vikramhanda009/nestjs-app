import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    add(): string {
        return "addd book"

    }
    update(): string {
        return "update book"

    }

    Delete(): string {
        return "Delete book"

    }

    find(): string {
        return "find book"

    }
}
