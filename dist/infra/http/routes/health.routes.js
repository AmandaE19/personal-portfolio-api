"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HealthController_1 = require("../controllers/HealthController");
const router = (0, express_1.Router)();
const controller = new HealthController_1.HealthController();
router.get("/", controller.check);
exports.default = router;
