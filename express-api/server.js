import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import cors from "cors"
import { UserRouter } from "./routes/userRoutes.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandling.js";
import compression from "compression";
import { SQLUserRouter } from "./routes/squUserRoutes.js";

dotenv.config();
const app = express();

app.use(compression())

//my middlewares hehehe

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());


//route mine
app.get("/",(req,res)=>{
    res.send("Api is running i mean my message ...")
});

app.use(logger)

app.use("/users",SQLUserRouter)
app.use("/api/users",UserRouter)

app.use(errorHandler)

const PORT = process.env.PORT || 5001;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})