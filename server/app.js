import express from "express";
import cookieParser from "cookie-parser";
import { handleError } from "./middlewares/error.js";
import cors from "cors";
import userRouter from "./routes/userRoute.js";
import roomRouter from "./routes/roomRoute.js";
import expenseRouter from "./routes/expenseRoute.js";
import botRouter from "./routes/botRoutes.js";

const app = express();


//middleware routes
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
  origin: ['https://roomzy-axja.vercel.app'],  // Add your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,  // Enable if you're using cookies/sessions
  maxAge: 86400  // Cache preflight request results for 24 hours (in seconds)
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.use(handleError);

// routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/rooms", roomRouter);
app.use("/api/v1/expenses", expenseRouter);
app.use("/api/v1/bot", botRouter);

export default app;
