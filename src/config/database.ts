import mongoose from "mongoose";

let isConnected: boolean = false;

export default async function connectDatabase() {
    mongoose.set('strictQuery', true); // Ensure that only schema-defined fields are used in query filters

    if (isConnected) {
        console.log('A database connection is already established.');
        return;
    }

    // Connect to the database
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        isConnected = true;
    } catch (error) {
        console.error(`Error connecting to the database: ${error}`);
        process.exit(1);
    }
}