import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdukModule } from './produk/produk.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './produk/config/orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProdukModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
