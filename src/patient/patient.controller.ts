import { Controller,Get, Param,Post,Body,Put, Delete,UseGuards, BadRequestException, HttpCode, InternalServerErrorException, NotFoundException} from "@nestjs/common";
import { PatientService } from "./patient.service";
import { CreatePatientDto } from "./dto/create.patient.dto";
import { UpdatePatientDto } from "./dto/update.patient.dto";
import { ParseIntPipe } from "@nestjs/common";
import { AuthGuard } from "src/auth/auth.guard";

@Controller('patient')
@UseGuards(AuthGuard) 

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
    @HttpCode(201)
     async createPatient(
      @Body() createPatientDto:CreatePatientDto
    ){

    try {
      
     
       const patient = await this.patientService.createPatient(createPatientDto)
       
       console.log(patient.name)

       if(patient){
         return  patient
       }else {
          throw new BadRequestException("Patient creation failed,no patient table is created")
       }
            
      } catch (error) {
         if(error instanceof BadRequestException){
            throw new BadRequestException(error.message,{
               cause:new Error(),
                
            })
         }

         throw new InternalServerErrorException("Internal server error")
      }
     
    }
    
    // Put:update/id
    // Finding the patient record in the table by patient id
    // Updating the existing record in the table by the updateData

    @Put('update/:id')
     async updatePatient(
        @Param('id',ParseIntPipe) id:number,
        @Body('updateData') updateData: UpdatePatientDto
    ){
      
      try {
         if(!id||!updateData){
              throw new BadRequestException("Please provide all required fields")
         }

         const patient = await this.patientService.updatePatient(+id,updateData)
         if(!patient){
            throw  new NotFoundException("Updating failed")

         }

         return patient
      } catch (error) {
         if(error instanceof BadRequestException){
             throw new BadRequestException(error.message)
         }

         throw new InternalServerErrorException('Internal server error ')
      }
       
    }
    
    // Delete:/delete/id
    // Finding the patient record in the table by id
    // Deleting the existing record of the patient by that id
    @Delete('delete/:id')
     async deletePatient(@Param('id',ParseIntPipe) id:number){
       try {
         const patient = await this.patientService.deletePatient(+id)
         if(!patient){
            throw new NotFoundException('Deleting failed')
         }

         return patient
       } catch (error) {
          if(error instanceof NotFoundException){
            throw new NotFoundException(error.message)
          }

         throw new InternalServerErrorException('Internal server error')
         
       }
     
    }
   
    
}