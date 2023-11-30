import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProdukService } from './produk.service';
import { CreateProdukDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { GetFilterDto } from './dto/get-filter.dto';

@Controller('produk')
export class ProdukController {
  constructor(private produkService: ProdukService) {}

  @Get()
  getProdukAll(@Query() filter: GetFilterDto) {
    
      return this.produkService.getAllProduk(filter);
    
  }

  @Post('add_produk')
  produkCreate(@Body() cProdukdto: CreateProdukDto) {
    return this.produkService.createProduk(cProdukdto);
  }

//   @Get(':id')
//   produkById(@Param('id') id: string) {
//     return this.produkService.getProdukById(id);
//   }

//   @Post('updateProduk/:id')
//   produkUpdate(@Param('id') id: string, @Body() updateProduk: UpdateDto) {
//     return this.produkService.updateProduk(id, updateProduk);
//   }

//   @Delete('deleteProduk/:id')
//   deleteProduk(@Param('id') id: string) {
//     return this.produkService.deleteProduk(id);
//   }

  // upload file
  //   @Post('uploadFile')
  //   @UseInterceptors(
  //     FileInterceptor('file', {
  //       storage: diskStorage({
  //         destination: 'public/img',
  //         filename: (req, file, cb) => {
  //           cb(null, file.originalname);
  //         },
  //       }),
  //     }),
  //   )
  //   uploadFile(@UploadedFile() file: Express.Multer.File) {
  //     return {
  //       statusCode: 200,
  //       data: file.path,
  //     };
  //   }
}
