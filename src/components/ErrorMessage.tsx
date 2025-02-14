import React from "react";

interface ErrorCardProps {
  message: string;
  onClose: () => void;
}

const ErrorCard: React.FC<ErrorCardProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate__animated animate__fadeIn">
    <div className="w-96 bg-white shadow-md rounded-lg p-6 border border-borderGray relative animate__animated animate__zoomIn">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-3 text-gray-500 text-xl hover:text-gray-700"
      >
        ✖
      </button>

      {/* Error Icon */}
      <div className="flex justify-center">
        <span className="text-orange-500 text-4xl">⚠️</span>
      </div>

      {/* Error Message */}
      <p className="text-gray-700 text-center font-medium mt-4">{message}</p>

      {/* Buttons */}
      <div className="mt-6 space-y-3">
        <button
          className="w-full bg-gray-100 text-gray-700 font-semibold py-2 rounded-md hover:bg-gray-200"
          onClick={onClose}
        >
          Okay
        </button>
      </div>
    </div>
  </div>
)}

export default ErrorCard;
