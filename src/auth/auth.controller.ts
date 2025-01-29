import { Controller,Post,Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dto/login.user.dto";

@Controller('auth')

export class AuthController {
    constructor(
        private authService:AuthService
    ){}
    
    @Post('login')
    async login(@Body() login:LoginUserDto){
     const token = this.authService.login(login)
     return token
    }
}