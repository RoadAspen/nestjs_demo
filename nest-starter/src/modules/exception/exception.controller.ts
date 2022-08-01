import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';

@Controller('exception')
export class ExceptionController {
  @Get()
  fetch(@Query() { id }) {
    if (!id)
      throw new HttpException(
        { status: HttpStatus.BAD_REQUEST, message: '请求参数id必传' },
        HttpStatus.BAD_REQUEST,
      );
  }
}
