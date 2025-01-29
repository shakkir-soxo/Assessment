import { Module } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { PatientController } from "./patient.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Patient } from "./patient.model";

@Module({
    imports:[SequelizeModule.forFeature([Patient])],
    controllers:[PatientController],  // Registering the PatientController
    providers:[PatientService]        // Registering the PatientService

})

export class PatientModule {}