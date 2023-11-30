import { Injectable } from '@nestjs/common';
import { Produk } from './produk.model';
import { v4 as uuid } from "uuid";
import { CreateProdukDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';
@Injectable()
export class ProdukService {
    private produk: Produk[] = []


    getAllProduk(){
        return this.produk;
    }

    createProduk(cProdukdto: CreateProdukDto){
        const{nama_produk, qty, harga} = cProdukdto;
        const produ: Produk = {
            id: uuid(),
            nama_produk,
            qty,
            harga
        }
        this.produk.push(produ);
        return produ;
    }

    getProdukById(id: string){
        return this.produk.find((produk)=> produk.id === id);
    }

    // update data
    updateProduk(id: string, updateProduk: UpdateDto){
        const prod = this.getProdukById(id)
        prod.nama_produk = updateProduk.nama_produk
        prod.qty = updateProduk.qty
        return prod;
    }

    // delete data
    deleteProduk(id: string){
        this.produk = this.produk.filter((prod)=> prod.id !== id)
    }
}
