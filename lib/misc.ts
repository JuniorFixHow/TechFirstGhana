import { IResponse } from "@/types/Types";

export const respond = (message:string, error:boolean, payload?:object, code?:number):IResponse=>{
    const data:IResponse = {
        message, error, payload, code
    } 
    return JSON.parse(JSON.stringify(data))
}
