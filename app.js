import "dotenv/config.js";
import connectDB from "./src/config/database.js";
import app from "./src/interfaces/server.js";

const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () =>
    console.log(`Servidor corriendo en localhost:${PORT}`)
  );
});