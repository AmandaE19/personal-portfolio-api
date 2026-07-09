import "reflect-metadata";

import "../../infra/container";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import { errorHandler } from "../../shared/middlewares/errorHandler";
import emailRoutes from "./routes/email.routes";
import healthRoutes from "./routes/health.routes";

const app = express();

const allowedOrigins = [
    process.env.URL_FRONTEND as string,
];

app.use(
    cors({
        origin(origin, callback) {
            if (!origin) {
                return callback(null, true);
            }

            if (allowedOrigins.includes(origin)) {
                return callback(null, true);
            }

            return callback(new Error("Not allowed by CORS"));
        },
        methods: ["POST"],
    })
);
app.use(helmet());
app.use(express.json());
app.use("/email", emailRoutes);
app.use("/health", healthRoutes);
app.use(errorHandler);

export { app };