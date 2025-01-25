import { Controller,Get, Param,Post,Body,Put, Delete,UseGuards} from "@nestjs/common";
import { PatientService } from "./patient.service";
import { JwtAuthGuard } from "src/auth/jwt.guard";

@Controller('patient')
@UseGuards(JwtAuthGuard) // Protect the route by JwtAuthGuard

export class PatientController {
    constructor(
       private patientService:PatientService
    ){}
   
    // GET:/patients 
    // Retrieve all patient record from the database
    
    @Get('patients')
     async getAllPatients(){
        return this.patientService.getAllPatients()
     }
    
     // Post:/patients/create
     // Creating a new record of patient into the database

    @Post('create')
     async createPatient(
        @Body('name') name:string,
        @Body('address') address:string,
        @Body('sex') sex:string,
        @Body('dateOfBirth') dateOfBirth:Date,
        @Body('mobileNumber') mobileNumber:number,
        @Body('isMarried') isMarried:boolean
    ){
       return this.patientService.createPatient(
        name,
        address,
        sex,
        dateOfBirth,
        mobileNumber,
        isMarried
       )
    }
    
    // Put:update/id
    // Finding the patient record in the table by patient id
    // Updating the existing record in the table by the updateData

    @Put('update/:id')
     async updatePatient(
        @Param('id') id:number,
        @Body('updateData') updateData:{}
    ){
       return this.patientService.updatePatient(+id,updateData)
    }
    
    // Delete:/delete/id
    // Finding the patient record in the table by id
    // Deleting the existing record of the patient by that id
    @Delete('delete/:id')
     async deletePatient(@Param('id') id:number){
       return this.patientService.deletePatient(+id)
    }
   
    
}