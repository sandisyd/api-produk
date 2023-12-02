import { Module } from '@nestjs/common';
import { ProdukController } from './produk.controller';
import { ProdukService } from './produk.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produk } from './produk.entity';
import { ProdukRepo } from './repo/produk.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Produk]), AuthModule],
  controllers: [ProdukController],
  providers: [ProdukService, ProdukRepo]
})
export class ProdukModule {}
