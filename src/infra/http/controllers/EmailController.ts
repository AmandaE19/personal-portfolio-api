import { injectable, inject } from "tsyringe";
import { Request, Response } from "express";

import { SendEmailUseCase } from "../../../application/useCases/SendEmailUseCase";
import { sendEmailSchema } from "../../../shared/validations/sendEmailSchema";

@injectable()
export class EmailController {
    constructor(
        @inject(SendEmailUseCase)
        private readonly sendEmailUseCase: SendEmailUseCase
    ) { }

    public send = async (
        req: Request,
        res: Response
    ): Promise<Response | void> => {
        const body = sendEmailSchema.parse(req.body);
        await this.sendEmailUseCase.execute(body);
        return res.sendStatus(204);
    };
}