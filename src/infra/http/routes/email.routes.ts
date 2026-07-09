import { Router } from "express";
import { makeEmailController } from "../factories";

const router = Router();

const controller = makeEmailController();

router.post("/", controller.send);

export default router;