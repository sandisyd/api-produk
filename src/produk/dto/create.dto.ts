import { IsNotEmpty } from "class-validator";

export class CreateProdukDto{
    @IsNotEmpty()
    nama_produk: string;
    
    @IsNotEmpty()
    qty: number;

    @IsNotEmpty()
    harga: string;
    
}