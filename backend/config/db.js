import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://ryanktran:Virginia23454@cluster0.ilpgh.mongodb.net/Food Delivery').then(()=>console.log("DB Connected"));
}