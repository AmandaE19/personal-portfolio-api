import { injectable } from "tsyringe";
import { resend } from "../config/resend";
import { SendEmailDTO } from "../../application/dto/SendEmailDTO";
import { IEmailProvider } from "../../domain/contracts/IEmailProvider";
import { env } from "../config/env";

@injectable()
export class ResendProvider implements IEmailProvider {
  async send(data: SendEmailDTO): Promise<void> {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: env.EMAIL_TO,
      subject: "Mensagem via portifólio",

      html: `
        <h2>Novo contato</h2>

        <strong>Nome</strong>
        <p>${data.name}</p>

        <strong>Email</strong>
        <p>${data.email}</p>

        <strong>Mensagem</strong>
        <p>${data.message}</p>
      `,
    });
  }
}