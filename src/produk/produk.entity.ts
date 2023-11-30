import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Produk{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nama_produk: string;

    @Column()
    qty: number;

    @Column()
    harga: string;
}