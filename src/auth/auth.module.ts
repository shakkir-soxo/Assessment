import { Module} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";


@Module({
    imports:[JwtModule,UserModule],
    providers:[AuthService],
    exports:[AuthService]
})

export class AuthModule {}