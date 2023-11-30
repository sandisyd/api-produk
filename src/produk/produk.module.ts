import { Module } from '@nestjs/common';
import { ProdukController } from './produk.controller';
import { ProdukService } from './produk.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produk } from './produk.entity';
import { ProdukRepo } from './repo/produk.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Produk])],
  controllers: [ProdukController],
  providers: [ProdukService, ProdukRepo]
})
export class ProdukModule {}
