import { Table,Column,DataType,Model } from "sequelize-typescript";

// Creating patient table

@Table

export class Patient extends Model {
    @Column({
        type:DataType.STRING,            // Creating name column
        allowNull:false
    })

    name:string

    @Column({
        type:DataType.STRING,           // Creating address column
        allowNull:false
    })

    address:string

    @Column({
        type:DataType.STRING,          // Creating sex column
        allowNull:false
    })

    sex:string

    @Column({
        type:DataType.DATE,           // Creating dateOfBirth column
        allowNull:false
    })

    dateOfBirth:Date

    @Column({
       type:DataType.INTEGER         // Creating mobile number column
    })

    mobileNumer:number

   @Column({
    type:DataType.BOOLEAN,          // Creating isMarried column
    allowNull:false
   })

   isMarried:boolean

}
