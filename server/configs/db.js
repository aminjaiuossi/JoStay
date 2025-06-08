import mongoose from "mongoose";

const connectDB = async () => {
  try {
     mongoose.connection.on('connected', () => console.log("DataBase Connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/JoStay`);

    }
  catch (error) {
    console.log(error.message);
  }
}

export default connectDB;
