import { IsNotEmpty } from "class-validator";

export class UpdateDto{
    @IsNotEmpty()
    nama_produk: string;

    @IsNotEmpty()
    qty: number;

    
}