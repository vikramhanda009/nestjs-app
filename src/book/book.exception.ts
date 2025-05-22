import { HttpException } from "@nestjs/common";

export class BookException extends HttpException {
    constructor(message: string, statusCode: number) {
        super(message, statusCode);
    }
    
}