import { Module} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";
import { AuthGuard } from "./auth.guard";


@Module({
    imports:[JwtModule,UserModule],
    providers:[AuthService,AuthGuard],
    exports:[AuthService]
})

export class AuthModule {}