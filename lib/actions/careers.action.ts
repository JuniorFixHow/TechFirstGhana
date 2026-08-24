'use server';
import { CareersFormPayload, IResponse } from "@/types/Types";
import { respond } from "../misc";
import { connectDB } from "../mongo";
import Career from "../models/careers.model";
import { sendCareerMail } from "../emails/Sendcareermail";

export async function createCareer(data:Partial<CareersFormPayload>):Promise<IResponse>{
    try {
        await connectDB();
        // console.log("Database:", connection.connection.db?.databaseName);
        const [career,_] = await Promise.all([
            Career.create(data),
            sendCareerMail(data as CareersFormPayload)
        ]);
        return respond('Signed up successfully', false, career, 201);
    } catch (error) {
        console.log(error);
        return respond('Error occured while creating career', true, {}, 500);
    }
}

export async function getCareers(){
    try {
        await connectDB();
        const careers = await Career.find() as unknown as CareersFormPayload[];
        return respond('Careers found successfully', false, careers, 200);
    } catch (error) {
        console.log(error);
        return respond('Error occured while fetching careers', true, {}, 500);
    }
}


export async function getCareer(id:string):Promise<IResponse>{
    try {
        await connectDB();
        const career = await Career.findById(id) as unknown as CareersFormPayload;
        return respond('Career found successfully', false, career, 200);
    } catch (error) {
        console.log(error);
        return respond('Error occured while fetching career', true, {}, 500);
    }
}


export async function updateCareer(data:Partial<CareersFormPayload>):Promise<IResponse>{
    try {
        await connectDB();
        const updatedCareer = await Career.findByIdAndUpdate(data._id, data, { new: true });
        return respond('Career updated successfully', false, updatedCareer, 200);
    } catch (error) {
        console.log(error);
        return respond('Error occured while updating career', true, {}, 500);
    }
}


export async function deleteCareer(id:string){
    try {
        await connectDB();
        const deletedCareer = await Career.deleteOne({ _id: id });
        return respond('Career deleted successfully', false, deletedCareer, 200);
    } catch (error) {
        console.log(error);
        return respond('Error occured while deleting career', true, {}, 500);
    }
}