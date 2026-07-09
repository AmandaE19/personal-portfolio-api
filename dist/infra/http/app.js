"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("reflect-metadata");
require("../../infra/container");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const errorHandler_1 = require("../../shared/middlewares/errorHandler");
const email_routes_1 = __importDefault(require("./routes/email.routes"));
const health_routes_1 = __importDefault(require("./routes/health.routes"));
const app = (0, express_1.default)();
exports.app = app;
const allowedOrigins = [
    process.env.URL_FRONTEND,
];
app.use((0, cors_1.default)({
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
}));
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use("/email", email_routes_1.default);
app.use("/health", health_routes_1.default);
app.use(errorHandler_1.errorHandler);
