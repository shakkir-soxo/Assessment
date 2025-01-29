import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto } from './dto/create.user.dto';
import * as bcrypt from 'bcrypt'
import { InjectModel } from '@nestjs/sequelize';



@Injectable()
export class UserService {
  
    constructor(
        @InjectModel(User)
        private userModel:typeof User
    ) {}
     

    async getUserByEmail(email:string){
       try {
        const user = await this.userModel.findOne({where:{email}})
        if(!user){
            throw new NotFoundException('user not found')
        }
        
        return  user
        
       } catch (error) {
          if(error instanceof NotFoundException){
             throw error
          }

          throw new InternalServerErrorException('Internal Server Error')
       }
     }

    
    async createNewUser(userData:CreateUserDto){
       try {
        const isUserExist = await this.userModel.findOne({where:{email:userData.email}})
        if(isUserExist){
            throw new ConflictException('User with this email already exist')
        }
        
     const hashPassword =  await bcrypt.hash(userData.password,10)
     const newUser = await this.userModel.create({...userData,password:hashPassword})

      if(newUser){
          return newUser
      }
        
       } catch (error) {
          if(error instanceof ConflictException||error instanceof NotFoundException ){
              throw error
          }

          throw new InternalServerErrorException('Internal Server Error')
       }

}
}
