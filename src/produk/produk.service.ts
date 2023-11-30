import { Injectable } from '@nestjs/common';
import { Produk } from './produk.model';
import { v4 as uuid } from "uuid";
@Injectable()
export class ProdukService {
    private produk: Produk[] = []


    getAllProduk(){
        return this.produk;
    }

    createProduk(nama_produk: string, qty: number, harga: string){
        const produ: Produk = {
            id: uuid(),
            nama_produk,
            qty,
            harga
        }
        this.produk.push(produ);
        return produ;
    }
}
