import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to MongoDB');
    return;
  }
  try {
    await mongoose.connect("mongodb+srv://obada_jawabreh:obada4047@first-cluster.ksi2u.mongodb.net/data?retryWrites=true&w=majority&appName=First-Cluster");
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;