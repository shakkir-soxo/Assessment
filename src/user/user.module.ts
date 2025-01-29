import { Module} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    SequelizeModule.forFeature([User]),
    AuthModule,
    
],
  controllers: [UserController],
  providers: [UserService]
  
})
export class UserModule {}
