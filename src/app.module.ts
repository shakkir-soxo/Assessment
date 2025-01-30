import { Module } from '@nestjs/common';
// import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Patient } from './patient/patient.model';
import { PatientModule } from './patient/patient.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/user.model';

@Module({
  // Importing sequelize module
  imports: [
    
     SequelizeModule.forRoot({ 
    dialect:"mssql",    
    host:"https://ec2-15-206-206-108.ap-south-1.compute.amazonaws.com",
    port:1433,
    username:"user_soxo",  // Database username
    password:"soxo@123",  // Database password
    database:"soxo", // Database name
    
  }),
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
