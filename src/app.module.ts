import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdukModule } from './produk/produk.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './produk/config/orm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ProdukModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
