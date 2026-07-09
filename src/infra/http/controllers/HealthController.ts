import { Request, Response } from "express";

export class HealthController {
    public check = (_req: Request, res: Response) => {
        return res.status(200).json({
            status: "ok",
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
        });
    };
}