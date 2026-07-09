import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

import { AppError } from "../../domain/errors/AppError";

export function errorHandler(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
) {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
    }

    if (error instanceof ZodError) {
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