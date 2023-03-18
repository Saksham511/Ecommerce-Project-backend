import mongoose from "mongoose";

const connectToMongo = async () => {
    try{
        const db= await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce",{
        useUnifiedTopology: true,
        useNewUrlParser: true,

    });   
    console.log(`MongoDB Connected: ${db.connection.host}`);
    } 
    catch(error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectToMongo;