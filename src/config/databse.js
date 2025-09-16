import mongoose from "mongoose";

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,       // Usa el nuevo parser de URL
        useUnifiedTopology: true     // Usa el nuevo motor de gestión de conexiones
      });
      console.log("Conectado a MongoDB");
    } catch (err) {
      console.error("Error de conexión:", err);
      process.exit(1); // Finaliza la ejecución si falla la conexión
    }
  };
  
  export default connectDB;