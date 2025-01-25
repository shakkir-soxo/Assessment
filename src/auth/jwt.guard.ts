import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

// This guard check authorization header for jwt bearer token
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt'){
   
}
