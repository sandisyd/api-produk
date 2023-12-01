import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from "uuid";
import { CreateProdukDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
import { GetFilterDto } from './dto/get-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdukRepo } from './repo/produk.repository';
import { Repository } from 'typeorm';
import { Produk } from './produk.entity';
@Injectable()
export class ProdukService {
    constructor(@InjectRepository(ProdukRepo) private produkRepo: ProdukRepo){}
    // private produk: Produk[] = []


    getAllProduk(filter: GetFilterDto){
        return this.produkRepo.getProdukAll(filter);
    }

    createProduk(cProdukdto: CreateProdukDto): Promise<Produk>{
        return this.produkRepo.createProduk(cProdukdto)
    }

    // updateProduk
    async updateProduk(id: string, uProduk: UpdateDto){
        const p = await this.produkRepo.getPordukByID(id);
        const title = uProduk.nama_produk;
        const qty = uProduk.qty;
        if (title) {
            p.nama_produk = title
        }
        if (qty) {
            p.qty = qty;
        }
        await this.produkRepo.save(p)
        return p;
    }

    getProdukById(id: string){
        return this.produkRepo.getPordukByID(id);
    }

    // delete data
    deleteProduk(id: string){
        return this.produkRepo.deleteProduk(id);
    }
    // delete data
    // deleteProduk(id: string){
    //     const a = this.getProdukById(id)
    //     this.produk = this.produk.filter((prod)=> prod.id !== a.id)
    // }


    // Filter
    // getProdukFilter(filter: GetFilterDto){
    //     const {search} = filter;

    //     let p = this.getAllProduk();

    //     if (search) {
    //         p = p.filter((pr)=> {
    //             if (pr.nama_produk.includes(search) || pr.harga.includes(search)) {
    //                 return true;
    //             }
    //             return false
    //         });
    //     }
    //     return p;
    // }
}
