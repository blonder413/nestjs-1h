import { Controller, Get, Param } from '@nestjs/common';

@Controller('libros')
export class LibrosController {
  @Get()
  buscarLibros(): string {
    return 'todos los libros';
  }

  @Get(':id')
  infoLibro(@Param() params) {
    return params;
  }
}
