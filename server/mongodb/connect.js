import mongoose from "mongoose";//modeling library for mongodb

const connectDB =(url) => {
    mongoose.set('strictQuery',true);

    mongoose.connect(url)
        .then(() => console.log('MongoDB connected'))
        .catch((error)=> console.log(error));
}
export default connectDB;