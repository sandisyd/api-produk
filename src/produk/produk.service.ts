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
        // const{nama_produk, qty, harga} = cProdukdto;
        return this.produkRepo.createProduk(cProdukdto)
    }

    // getProdukById(id: string){
    //     const pId = this.produk.find((produk)=> produk.id === id);
    //     if (!pId) {
    //         throw new NotFoundException('Produk tidak ditemukan');
    //     }
    //     return pId;
    // }

    // update data
    // updateProduk(id: string, updateProduk: UpdateDto){
    //     const prod = this.getProdukById(id)
    //     prod.nama_produk = updateProduk.nama_produk
    //     prod.qty = updateProduk.qty
    //     return prod;
    // }

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
