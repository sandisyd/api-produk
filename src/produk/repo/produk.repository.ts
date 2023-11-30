import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Produk } from "../produk.entity";
import { GetFilterDto } from "../dto/get-filter.dto";
import { CreateProdukDto } from "../dto/create.dto";

@Injectable()
export class ProdukRepo extends Repository<Produk>{
    constructor(private dataSource: DataSource){
        super(Produk, dataSource.createEntityManager())
    }

    async getProdukAll(filter: GetFilterDto){
        const {search} = filter;

        const query = this.createQueryBuilder('produk')

        if (search) {
            query.andWhere('(LOWER(produk.nama_produk) LIKE LOWER(:search) OR LOWER(produk.harga) LIKE LOWER(:search))', {search: `%${search}%`})
        }

        const prod = await query.getMany()
        return prod;
    }

    async createProduk(createProduk: CreateProdukDto){
        const {nama_produk, qty, harga} = createProduk;

        const produkBaru = this.create({
            nama_produk,
            qty,
            harga
        });
        await this.save(produkBaru);
        return produkBaru;
    }
}