import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProdukService } from './produk.service';
import { CreateProdukDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Controller('produk')
export class ProdukController {
  constructor(private produkService: ProdukService) {}

  @Get()
  getProdukAll() {
    return this.produkService.getAllProduk();
  }

  @Post('add_produk')
  produkCreate(@Body() cProdukdto: CreateProdukDto) {
    return this.produkService.createProduk(cProdukdto);
  }

  @Get(':id')
  produkById(@Param('id') id: string) {
    return this.produkService.getProdukById(id);
  }

  @Post('updateProduk/:id')
  produkUpdate(@Param('id') id: string, @Body() updateProduk: UpdateDto) {
    return this.produkService.updateProduk(id, updateProduk);
  }

  @Delete('deleteProduk/:id')
  deleteProduk(@Param('id') id: string){
    return this.produkService.deleteProduk(id)
  }
}
