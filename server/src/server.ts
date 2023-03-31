import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const port: number = parseInt(process.env.PORT || "8000", 10);
app.listen(port, () => {
  console.log(`App running on port http://localhost:${port}`);
});
