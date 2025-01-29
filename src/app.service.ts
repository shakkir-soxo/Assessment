import { Injectable, InternalServerErrorException,OnModuleInit} from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService implements OnModuleInit {
  constructor( private sequelize:Sequelize) {}
  
 async onModuleInit() {
    await this.intializeDataBase()
 }

 async intializeDataBase(){
   
  try {
    await this.sequelize.authenticate()
    console.log('database connected successfuly')
  } catch (error) {
     console.error('database connection failed ',error)
     throw new InternalServerErrorException('failed to  connect the database')
  }
 }
}
