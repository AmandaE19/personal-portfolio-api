import { container } from "tsyringe";

import { IEmailProvider } from "../../domain/contracts/IEmailProvider";
import { ResendProvider } from "../providers/ResendProvider";

container.registerSingleton<IEmailProvider>(
    "EmailProvider",
    ResendProvider
)