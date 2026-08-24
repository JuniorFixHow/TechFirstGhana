import { CareersFormPayload } from "@/types/Types";
import { model, models, Schema } from "mongoose";

const CareerSchema = new Schema<CareersFormPayload>({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phoneNumber:{type:String, required:true},
    country:{type:String, required:true},
    experience:{type:String, required:true, default:'Beginner'},
    portfolio:{type:String, required:false},
    skills:[String],
    role:{type:String, required:true, default:'Developer'},
    compensationPreference:{type:String, required:true, default:'Project-profit-sharing'},
    reasonForJoining:{type:String, required:true},
    projectsIntrested:[String],
}, {timestamps: true});

const Career = models?.Career || model<CareersFormPayload>('Career', CareerSchema);

export default Career;