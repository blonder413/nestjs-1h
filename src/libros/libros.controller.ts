import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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
    return `${libro.autor} es el autor del libro ${libro.titulo}`;
  }

  @Put(':id')
  editarLibro(@Param('id') id) {
    return `Editar libro de id ${id}`;
  }

  @Delete(':id')
  eliminarLibro(@Param('id') id) {
    return `Eliminar libro id ${id}`;
  }
}
