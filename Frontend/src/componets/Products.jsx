import React from "react";
import axios from "axios";

const Products = ({ data }) => {
  console.log(data);
  const checkoutHandler = async (amount) => {
    const { data: keyData } = await axios.get("/api/v1/get-key");
    const { key } = keyData;
    console.log(key);
    const { data: orderData } = await axios.post("/api/v1/payment/process", {
      amount,
    });
    const { order } = orderData;
    console.log(order);
    const options = {
      key: key, // Replace with your Razorpay key_id
      amount: amount, // Amount is in currency subunits.
      currency: "INR",
      name: "ReaderWorld Corp",
      description: "Test Transaction",
      order_id: order.id, // This is the order_id created in the backend
      callback_url: "/api/v1/paymentVerification", // Your success URL
      prefill: {
        name: "Gaurav Kumar",
        email: "anuragsharma8435@gmail.com",
        contact: "9999999999",
      },
      theme: {
        color: "#003380",
      },
    };
    const rzp = new Razorpay(options);
    rzp.open();
  };
  return (
    <>
      <div
        className="p-5 grid gap-6 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4"
      >
        {data.map((item) => (
          <div
            className="bg-white rounded-2xl shadow-md overflow-hidden"
            key={item.id}
          >
            <img
              className="w-full h-56 object-cover"
              src={item.image}
              alt="Shoes"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm mb-4">Price {item.price}</p>

              <div className="flex justify-end">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
                  onClick={() => checkoutHandler(item.price)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
