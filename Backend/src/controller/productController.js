import { instance } from "../../server.js";
import crypto from "crypto";

export const processPayment = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100),
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  res.status(200).json({ success: true, order });
};

export const getKey = async (req, res) => {
  res.status(200).json({ key: process.env.RAZOR_KEY });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    req.body;
  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZOR_PASS)
    .update(body.toString())
    .digest("hex");
  // res.status(200).json({ success: true });

  const isAuthentic = expectedSignature === razorpay_signature;
  if (isAuthentic) {
    return res.redirect(
      `http://localhost:5174/paymentSuccess?reference=${razorpay_payment_id}`,
    );
  } else {
    res.status(404).json({ success: false });
  }
};
