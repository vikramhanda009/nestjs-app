import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class BookGuard implements CanActivate {
  private readonly key: string = "123456";

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const headerKey = request.headers['key'];

    if (!headerKey || headerKey !== this.key) {
      throw new UnauthorizedException("Invalid or missing API key");
    }

    return true;
  }
}
