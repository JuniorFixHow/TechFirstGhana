import mongoose, { Mongoose } from "mongoose";

const MONGO = process.env.MONGO_URI;
interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

declare global {
    var mongoose: MongooseConnection | undefined;
}

const cached: MongooseConnection = global.mongoose || {conn: null, promise: null};
global.mongoose = cached;

export const connectDB = async () => {
    if(cached.conn) return cached.conn;
    if(!MONGO) throw new Error('No MongoDB URI found');
    if(!cached.promise){
        cached.promise = mongoose.connect(MONGO, {bufferCommands:false});
    }
    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }
    return cached.conn;
}