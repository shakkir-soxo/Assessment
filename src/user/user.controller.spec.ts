import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';


describe('UserController', () => {
  let userControll: UserController;
  let userService:UserService

  beforeEach(async () => {

     const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers:[
        {
          provide:UserService,
          useValue:{
            createNewUser:jest.fn()
          }
        }
      ]
       
    }).compile();


     userControll = module.get<UserController>(UserController);
     userService = module.get(UserService)
    
  });


  describe('createNewUser',() => {
    it('should sucessfully create a user', async () => {
         const createUserDto:CreateUserDto =  {userName:'username',email:'user123@gmailom',password:"user123"}
         const result = { id:1, ...CreateUserDto }
         jest.spyOn(userService,'createNewUser').mockResolvedValue(createUserDto)
         expect(await userControll.createNewUser(createUserDto)).toBe(result)
         
    })
  })
});
