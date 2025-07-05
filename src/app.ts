//Initialize the express app
import express, {Request, Response} from "express";
import productRoutes from "./routes/product-routes";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use("/api/products",productRoutes);
export default app;