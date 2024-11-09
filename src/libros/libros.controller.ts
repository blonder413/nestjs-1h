import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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

  @Post()
  crearLibro(@Body() libro) {
    // return libro;
    return `${libro.autor} es el autor del libro ${libro.titulo}`
  }
}
