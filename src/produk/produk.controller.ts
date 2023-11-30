import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProdukService } from './produk.service';

@Controller('produk')
export class ProdukController {
  constructor(private produkService: ProdukService) {}

  @Get()
  getProdukAll() {
    return this.produkService.getAllProduk();
  }

  @Post('add_produk')
  produkCreate(
    @Body('nama_produk') nama_produk: string,
    @Body('qty') qty: number,
    @Body('harga') harga: string,
  ) {
    return this.produkService.createProduk(nama_produk, qty, harga);
  }
}
