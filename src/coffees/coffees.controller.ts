import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeeController {
  @Get()
  findAll(@Query() pagination: { limit?: number; offset?: number }) {
    const { limit, offset } = pagination;
    return `This action returns all coffees. Limit: ${limit}, Offset: ${offset}`;
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} coffee`;
  }

  @HttpCode(HttpStatus.GONE)
  @Post()
  create(@Body() body: any) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return `This action updates a #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} coffee`;
  }
}
