export class UpdatePatientDto {
     id:number
     updatedData:{
        name:string
        address:string
        sex:string
        dateOfBirth:Date
        mobileNumber:number
        isMarried:boolean
    }
}