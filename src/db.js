import { connect } from "mongoose";
import { MONGODB_URI } from './config'

export const conectDB = async ()=>{
    try{
        await connect(MONGODB_URI)
        console.log('conection done')
    } catch (error){
        console.error(error)
    }
}