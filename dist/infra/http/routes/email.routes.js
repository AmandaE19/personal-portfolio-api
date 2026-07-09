"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const factories_1 = require("../factories");
const router = (0, express_1.Router)();
const controller = (0, factories_1.makeEmailController)();
router.post("/", controller.send);
exports.default = router;
