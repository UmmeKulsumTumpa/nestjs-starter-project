import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/createUserDto';

@Injectable()
export class UserService {
    private users: CreateUserDto[] = [];

    create(createUserDto: CreateUserDto) : CreateUserDto {
        const user = { ...createUserDto};
        this.users.push(user);

        return user;
    }
}
