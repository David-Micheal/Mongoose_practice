import { Router } from "express";
import { getCar, getOne, postCar } from "../controller/carController";
const router = Router();

router.route("/car").get(getCar);
router.route("/car/:id").get(getOne);
router.route("/newcar").post(postCar);

export default router;