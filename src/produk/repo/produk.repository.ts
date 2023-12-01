import { Injectable, NotFoundException } from "@nestjs/common";
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
        
        return await this.save(produkBaru);
    }

    // get by id
    async getPordukByID(id: string){
        try {
            const f = await this.findOne({
                where: {
                    id
                }
            });
            return f;
        } catch (error) {
            throw new NotFoundException(`Produk dengan ${id} tidak ditemukan`);
            
        }
    }

    async deleteProduk(id: string){
        const dProd = await this.delete(id)

        if (dProd.affected === 0) {
            throw new NotFoundException("Produk tidak ditemukan");
            
        }

        return dProd;
    }
}