"use client";
import React, { useState } from "react";

const CartPage = () => {
  const [flashing, setFlashing] = useState(0);

  const triggerFlash = (number: number) => {
    setFlashing(number);
    setTimeout(() => setFlashing(0), 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => triggerFlash(1)}
        className="mb-8 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
      >
        Flash 1
      </button>
      <button
        onClick={() => triggerFlash(2)}
        className="mb-8 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
      >
        Flash 2
      </button>

      <div
        className={`w-64 h-32 ${
          flashing == 1 ? "bg-gray-400" : "bg-transparent"
        } transition-colors duration-1000 ease-out rounded-lg`}
      ></div>
      <div
        className={`w-64 h-32 ${
          flashing == 2 ? "bg-gray-400" : "bg-red"
        } transition-colors duration-1000 ease-in-out rounded-lg border`}
      >
        Hello
      </div>
    </div>
  );
};

export default CartPage;
