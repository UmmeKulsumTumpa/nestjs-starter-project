import { Controller, Body, HttpStatus, Post, HttpCode } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto } from '../dto/createUserDto';
import { USER_MESSAGES } from 'src/common/constants';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createUserDto: CreateUserDto) {
        const user = this.userService.create(createUserDto);
        return {
            message: USER_MESSAGES.CREATED,
            user
        };
    }
}
