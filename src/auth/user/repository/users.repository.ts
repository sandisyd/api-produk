import { DataSource, Repository } from 'typeorm';
import { Users } from '../users.entity';
import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { UserCreateDto } from '../dto/user_create.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UsersRepo extends Repository<Users> {
  constructor(private dataSource: DataSource) {
    super(Users, dataSource.createEntityManager());
  }

  async createUsers(userCreate: UserCreateDto) {
    const { nama_lengkap, email, username, password } = userCreate;

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    const user = this.create({
      nama_lengkap,
      email,
      username,
      password: hashPassword,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === '2305') {
        throw new ConflictException('Username sudah tersedia');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
