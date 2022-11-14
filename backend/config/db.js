import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.REACT_APP_MONGO_URI);
    console.log(`🟢 Mongo db connected:`, connection.connection.host);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
