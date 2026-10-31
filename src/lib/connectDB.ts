import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}
const MONGODB_URI: string | undefined = process.env.MONGODB_URI

export default async function connectDB (): Promise<void> {
    if (!MONGODB_URI) {
        console.log("Mongodb uri is missing")
    }

    if (connection.isConnected === 1) {
        console.log(`Database already connected - ${connection.isConnected}`)
        return;
    }
    try {
        await mongoose.connect(MONGODB_URI || "", {
            serverSelectionTimeoutMS: 5000,
        })
        connection.isConnected = mongoose.connection.readyState
        console.log("Database connected successfully")
    } catch (error) {
        console.log(`Database Connection Failed - Error: ${error}`);
        throw error;
    }
}