"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const ResendProvider_1 = require("../providers/ResendProvider");
tsyringe_1.container.registerSingleton("EmailProvider", ResendProvider_1.ResendProvider);
