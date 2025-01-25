import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './patient/patient.model';

@Module({
  // Importing sequelize module
  imports: [ SequelizeModule.forRoot({ 
    dialect:"mssql",    
    host:"localhost",
    port:1433,
    username:"username",  // Database username
    password:"password",  // Database password
    database:"databse name", // Database name
    models:[Patient] // Adding models
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
