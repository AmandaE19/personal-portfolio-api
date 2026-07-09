import { SendEmailDTO } from "../../application/dto/SendEmailDTO";

export interface IEmailProvider {
    send(data: SendEmailDTO): Promise<void>;
}