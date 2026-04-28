import express from "express";
import {
  getKey,
  paymentVerification,
  processPayment,
} from "../controller/productController.js";
const router = express.Router();

router.route("/payment/process").post(processPayment);
router.route("/get-key").get(getKey);
router.route("/paymentVerification").post(paymentVerification);
export default router;
