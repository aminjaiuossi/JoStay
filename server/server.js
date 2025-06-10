// server.js
import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from "@clerk/express";
import clerkWebhooks from "./controller/clerkWebhooks.js";
import { createServer } from "@vercel/node";

// اتصل بقاعدة البيانات
connectDB();

// أنشئ تطبيق إكسبرس
const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// المسارات
app.use("/api/clerk", clerkWebhooks);
app.get("/", (req, res) => res.send("API is working fine"));

// Vercel تتطلب تصدير المعالج بدلاً من app.listen
export default app;
