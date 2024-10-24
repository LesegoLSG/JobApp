import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/LottieAnimation/SuccessLottie.json";
// Success page with Lottie file
const SuccessPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center">
      {/* Lottie file */}
      <Lottie options={defaultOptions} height={300} width={300} />
      {/* Page message */}
      <p className="text-center text-gray-600 mt-4 font-semibold">
        Thank you, our team will carefully review your details and get back to
        you.
      </p>
    </div>
  );
};

export default SuccessPage;
