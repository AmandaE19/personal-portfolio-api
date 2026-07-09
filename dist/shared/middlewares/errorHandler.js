"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const zod_1 = require("zod");
const AppError_1 = require("../../domain/errors/AppError");
function errorHandler(error, request, response, next) {
    if (error instanceof AppError_1.AppError) {
        return response.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
    }
    if (error instanceof zod_1.ZodError) {
        return response.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.flatten().fieldErrors,
        });
    }
    console.error(error);
    return response.status(500).json({
        success: false,
        message: "Internal server error",
    });
}
