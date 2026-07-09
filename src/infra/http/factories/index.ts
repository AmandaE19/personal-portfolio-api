import { container } from "tsyringe";
import { EmailController } from "../controllers/EmailController";

export function makeEmailController() {
    return container.resolve(EmailController);
}