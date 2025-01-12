import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodburl').then(()=>console.log("DataBase Connected"));
}