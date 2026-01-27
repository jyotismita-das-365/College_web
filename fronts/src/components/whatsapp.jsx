import React from "react";
import whatsapp from '../assets/whatsapp.png';

const Whatsapp = () => {
  const phoneNumber = "8699609193"; // Replace with your WhatsApp number (with country code, no +)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="Chat on WhatsApp"
    >
      <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 shadow-lg hover:bg-green-600 transition-colors">
        {/* WhatsApp Icon from assets */}
        <img src={whatsapp} alt="whatsup contact" />
      </span>
    </a>
  );
};

export default Whatsapp;
