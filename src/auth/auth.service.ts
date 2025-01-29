import { Injectable, InternalServerErrorException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt'
import { LoginUserDto } from "./dto/login.user.dto";


@Injectable()
export class AuthService {
  constructor(
    private jwtService:JwtService,
    private userService:UserService
  ){}

  async getAuthenticatedUser(email:string,password:string){
     try {

      const user = await this.userService.getUserByEmail(email)
      const verifyUser = await this.verifyPassword(password,user.password)
       if(verifyUser){
        return user
       }
      
      
     } catch (error) {
        if(error instanceof UnauthorizedException){
          throw error
        }

        throw new InternalServerErrorException('Internal server error')
     }   
  }

  async verifyPassword(password:string,hashedPassword:string){
      const isPasswordMatching = await bcrypt.compare(password,hashedPassword)
      if(!isPasswordMatching){
        throw new UnauthorizedException('Invalid credentials')
     }
     return true

  }

  async login(userLogin:LoginUserDto){
       const user =  await this.getAuthenticatedUser(userLogin.email,userLogin.password)
       const payload = {email:user.email,sub:user.id}
       const access_token = this.jwtService.sign(payload)
       return access_token
  }
  

}