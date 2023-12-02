import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepo } from './user/repository/users.repository';
import { UserCreateDto } from './user/dto/user_create.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt/jwt_payload.interface';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepo) private userRepo: UsersRepo,
    private jwtService: JwtService,
  ) {}

  async signUp(userCreate: UserCreateDto) {
    return this.userRepo.createUsers(userCreate);
  }

  async login(userLogin: UserCreateDto): Promise<{ accessToken: string }> {
    const { username, password } = userLogin;
    const usr = await this.userRepo.findOne({
      where: {
        username,
      },
    });
    if (usr && (await bcrypt.compare(password, usr.password))) {
      const payload: JwtPayload = { username };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Token not found');
    }
  }
}
