import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CrearLibroDto } from "./dto/crear-libros.dto";

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
  crearLibro(@Body() libro:CrearLibroDto) {
    // return libro;
    return `${libro.autor} es el autor del libro ${libro.nombre}`;
  }

  @Put(':id')
  editarLibro(@Param('id') id:number, @Body() ActualizarLibro: CrearLibroDto) {
    return `Editar libro de id ${id}`;
  }

  @Delete(':id')
  eliminarLibro(@Param('id') id) {
    return `Eliminar libro id ${id}`;
  }
}
