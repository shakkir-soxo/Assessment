import { Injectable } from "@nestjs/common";
import { Patient } from "./patient.model";
import { InjectModel } from "@nestjs/sequelize";
import { CreatePatientDto } from "./dto/create.patient.dto";


@Injectable()

// Creating PatientService class for managing actions related to Patient

export class PatientService {
    constructor(
        @InjectModel(Patient)
        private patientModel: typeof Patient
    ){}

    async createPatient(patientData:Partial<CreatePatientDto>):Promise<Patient> {
        // Create  new record of patient in the table
        const patient = await this.patientModel.create(patientData) 
        
        // Returning patient object
        return patient
    }


    
    // Retreiving all records related to the patient
    async getAllPatients() {
       return await this.patientModel.findAll()   
    }
      
    
      // Modify the existing record by the provided data
    async updatePatient(id:number,updateData:Partial<Patient>):Promise<Patient> {
        // Find the patient by id
       const patient = await this.patientModel.findByPk(id)
       if(!patient){
        throw new Error("Patient not found !")
       }
       // Update the patient by updateData
       await patient.update(updateData)
       return patient
    }


    // Deleting the patient record from the database
    async deletePatient(id:number) {
        // Find the patient by id
      const patient = await this.patientModel.findByPk(id)
      if(!patient){
        throw new Error("Patient not found !")
      }
       
     // Delete the patient data from the database
     await patient.destroy()
     return `${patient.name} deleted from the database`
    }


}