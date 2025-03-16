import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Connexion à la base de données MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/chatbot');  
    console.log('MongoDB connecté');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB', error);
    process.exit(1); 
  }
};

export default connectDB;