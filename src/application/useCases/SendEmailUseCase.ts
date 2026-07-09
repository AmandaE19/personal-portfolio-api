import { inject, injectable } from "tsyringe";
import { SendEmailDTO } from "../dto/SendEmailDTO";
import { IEmailProvider } from "../../domain/contracts/IEmailProvider";
import { AppError } from "../../domain/errors/AppError";

@injectable()
export class SendEmailUseCase {
    constructor(
        @inject("EmailProvider")
        private readonly provider: IEmailProvider
    ) { }

    async execute(data: SendEmailDTO) {
        try {
            await this.provider.send(data);
        } catch (error) {
            throw new AppError("Failed to send email", 500);
        }
    }
}