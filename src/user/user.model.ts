import { Model } from "sequelize";
import { DataType, Table ,Column, Unique,PrimaryKey,AutoIncrement} from "sequelize-typescript";

@Table

export class User extends Model {
    
    @AutoIncrement
    @PrimaryKey
    @Column({
        type:DataType.INTEGER,
        allowNull:false

    })
       id:number

    @Column({
        type:DataType.STRING,
        allowNull:false
    })

    userName:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })

    password:string
    
    @Unique
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    email:string
}


