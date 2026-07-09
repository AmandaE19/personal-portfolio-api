import "reflect-metadata";

import { env } from "./infra/config/env";
import { app } from "./infra/http/app";

app.listen(env.PORT, () => {
    console.log(`🚀 Server running on ${env.PORT}`);
});