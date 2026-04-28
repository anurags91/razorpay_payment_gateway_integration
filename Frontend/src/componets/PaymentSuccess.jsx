import { Link, useLocation } from "react-router-dom";

const paymentSuccess = () => {
  const query = new URLSearchParams(useLocation().search);
  const reference = query.get("reference");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 text-green-600 rounded-full p-4">✓</div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your payment has been processed
          successfully.
        </p>
        {reference && <p>Reference Id: {reference}</p>}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
export default paymentSuccess;
