import app from "./src/app.js";
import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config({ path: "src/config/config.env" });

export const instance = new Razorpay({
  key_id: process.env.RAZOR_KEY,
  key_secret: process.env.RAZOR_PASS,
});

// instance.orders.all().then(console.log).catch(console.error);



app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
