import { Controller,Post,Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('user')
export class UserController {
    constructor(
     private userService:UserService
    ) {} 

    @Post('register')
    async createNewUser(@Body() user:CreateUserDto){
        return this.userService.createNewUser(user)
    }
    
}
