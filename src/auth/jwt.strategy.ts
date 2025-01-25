import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { JwtService } from "@nestjs/jwt";
import { Strategy,ExtractJwt } from 'passport-jwt'


/* JwtAuthStrategy is a PasssportStrategy for handling the jwt authentication
   It validates the jwt token that sends in the authorization header as bearer token 
 */

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy){
    constructor() {
       super({
         jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract jwt from headers
         secretOrKey:"secret123"
         
       })
    }
    
    async validate(payload:any){     // Return the user id from the token
       return {userId:payload.id} 
    }
   
}





