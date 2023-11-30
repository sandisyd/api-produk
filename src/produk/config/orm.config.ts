import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    host: 'localhost',
    username: 'postgres',
    password: '145300',
    autoLoadEntities: true,
    synchronize: true,
    logging: true,
    database: 'produk'
}