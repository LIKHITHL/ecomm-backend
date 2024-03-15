import mongoose from "mongoose";

const connectDB = async (db) => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "eCommerce",
    });
    console.log(`Connected to Mongodb Database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`);
  }
};
// hello world!
export default connectDB;
