"use client";
import React, { useState } from "react";
import Form from "../components/Ticket";
import { FormData } from "../utils/types";
import './globals.css';  // Since it's directly in the 'app' folder

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    ticketType: "",
    ticketCount: 1,
    name: "",
    email: "",
    project: "",
    avatar: null,
  });

  const nextStep = () => setStep(step + 1);
  const resetForm = () => {
    setFormData({
      ticketType: "",
      ticketCount: 1,
      name: "",
      email: "",
      project: "",
      avatar: null,
    });
    setStep(1);
  };

  return (<div className="flex flex-col items-center gap-[40px] px-4 py-[112px] max-w-[1440px] mx-auto sm:gap-[60px] sm:px-6 sm:py-[80px] md:gap-[70px] md:px-8 md:py-[100px] lg:gap-[80px] lg:px-10 lg:py-[120px] xl:gap-[90px] xl:px-12 xl:py-[140px]">

<Form step={step} formData={formData} setFormData={setFormData} nextStep={nextStep} resetForm={resetForm} />
    </div>
  );
};

export default App;
