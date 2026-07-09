"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeEmailController = makeEmailController;
const tsyringe_1 = require("tsyringe");
const EmailController_1 = require("../controllers/EmailController");
function makeEmailController() {
    return tsyringe_1.container.resolve(EmailController_1.EmailController);
}
