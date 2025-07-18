import { Controller, Body, HttpStatus, Post, HttpCode, Get, Query, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { CreateUserDto, FilterUserDto, UpdateUserDto } from '../dto/index';
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

    @Get()
    findAll(@Query() filter: FilterUserDto){
        const users = this.userService.findAll(filter);
        return {
            message: USER_MESSAGES.GET_ALL,
            users
        }
    }

    @Patch(':username')
    update(
        @Param('username') username: string,
        @Body() updateUserDto: UpdateUserDto
    ) {
        const user = this.userService.update(username, updateUserDto);
        return {
            message: USER_MESSAGES.UPDATED,
            user
        }
    }

    @Delete(':username')
    delete(@Param('username') username: string){
        const user = this.userService.delete(username);
        return{
            message: USER_MESSAGES.DELETED,
            user
        }
    }
}
