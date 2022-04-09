import express from "express"
import dotenv from "dotenv"
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./Datatlmport.js.js";
import productRoute from "./Routes/ProductRoutes.js";
import userRouter from "./Routes/UserRoutes.js";
import { errorHandle, notFound } from "./Middleware/Errors.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json())

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);

// ERROR HANDLE
app.use(notFound);
app.use(errorHandle);


const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log("Server run in port " + PORT);
})
