import { Injectable } from '@nestjs/common';
import { CreateUserDto, FilterUserDto, UpdateUserDto } from '../dto/index';

@Injectable()
export class UserService {
    private users: CreateUserDto[] = [];

    create(createUserDto: CreateUserDto): CreateUserDto {
        const user = { ...createUserDto };
        this.users.push(user);

        return user;
    }

    findAll(filter: FilterUserDto) {
        let result = this.users;

        if (filter.username) {
            result = result.filter(user => user.username.toLowerCase().includes(filter.username!.toLowerCase())
            );
        }

        if (filter.email) {
            result = result.filter(user => user.email.toLowerCase().includes(filter.email!.toLowerCase()));
        }

        return result;
    }

    update(username: string, updateUserDto: UpdateUserDto) {
        const user = this.users.find(user => user.username === username);
        if (!user) return null;

        Object.assign(user, updateUserDto);
        return user;
    }

    delete(username: string) {
        const index = this.users.findIndex(user => user.username === username);

        if (index === -1) return null;
        const deletedUser = this.users.splice(index, 1)[0];
        
        return deletedUser;
    }
}
