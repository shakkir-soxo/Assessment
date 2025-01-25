import { Module } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { PatientController } from "./patient.controller";

@Module({
    imports:[],
    controllers:[PatientController],  // Registering the PatientController
    providers:[PatientService]        // Registering the PatientService

})

export class UserModule {}