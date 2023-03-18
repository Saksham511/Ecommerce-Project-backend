import mongoose from "mongoose";

const connectToMongo = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/ecommerce")
    .then( () => console.log("connection successful") )
    .catch(  (err) => console.log(err));
};

export default connectToMongo;