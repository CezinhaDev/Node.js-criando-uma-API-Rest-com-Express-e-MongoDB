import mongoose from "mongoose";

async function conectaNaDatabase() {
  await mongoose.connect("mongodb+srv://admin:admin123@cluster0.hhbzstb.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
  
  return mongoose.connection;
}

export default conectaNaDatabase;
