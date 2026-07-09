"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const env_1 = require("./infra/config/env");
const app_1 = require("./infra/http/app");
app_1.app.listen(env_1.env.PORT, () => {
    console.log(`🚀 Server running on ${env_1.env.PORT}`);
});
