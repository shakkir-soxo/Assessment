import { Module } from '@nestjs/common';
import { AppService } from './app.service';
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
    host:".\sqlexpress",
    port:1433,
    username:"sa",  // Database username
    password:"shak123",  // Database password
    database:"soxo", // Database name
    
  }),
    ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
