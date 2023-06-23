import { app } from "./app.js";
import { connectDB } from "./data/database.js";
import cors from "cors";

connectDB();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(4000, () => {
  console.log(`Server is working on port : ${process.env.NODE_ENV} Mode`);
});
