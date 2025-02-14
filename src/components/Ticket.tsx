import React, { useState } from "react";
import { FormData } from "../utils/types";
import ErrorCard from "./ErrorMessage";
import "../app/globals.css"; // Since it's directly in the 'app' folder

type FormProps = {
  step: number;
  formData: FormData;
  setFormData: (data: FormData) => void;
  nextStep: () => void;
  resetForm: () => void;
};

const Form = ({
  step,
  formData,
  setFormData,
  nextStep,
  resetForm,
}: FormProps) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Validate form fields
  const validateForm = () => {
    if (step === 1) {
      if (!formData.ticketType) return false; // Ticket type is required
      if (formData.ticketCount < 1 || formData.ticketCount > 10) return false; // Ticket count between 1 and 10
    }
    return true;
  };


  const handleSubmit = () => {
    // Check if all fields are filled
    setErrorMessage(null);

    // Validate the form fields
    if (!formData.name) {
      setErrorMessage("Please enter your name.");
      return;
    }

    if (!formData.email) {
      setErrorMessage("Please enter your email.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
     
      return;
    }
    nextStep(); // Proceed to next step if form is valid
  };
  // Handle input changes for form fields
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Disable "Next" button if form is invalid
  const isNextButtonDisabled = !validateForm();

  return (
    <div className="">
      {errorMessage && (
        <ErrorCard
          message={errorMessage}
          onClose={() => setErrorMessage(null)}
        />
      )}
      {step === 1 && (
        <div className="w-full flex flex-col gap-3 p-12">
          <div className="rounded-[40px] border border-[#0e464f] flex flex-col items-center justify-center min-h-screen p-12 ">
            {/* Heading */}
            {/* Step Progress Bar (Now on top of everything) */}
            <div className="w-full max-w-xl">
              {/* Ticket Selection Header */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-white text-2xl sm:text-3xl font-['JejuMyeongjo']">
                  Ticket Selection
                </h2>
                <span className="text-neutral-50 text-base font-['Roboto']">
                  Step 1/3
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full">
                <svg
                  className="w-full h-1 sm:h-2"
                  viewBox="0 0 604 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Progress Line */}
                  <path
                    d="M0 2C0 0.895431 0.895431 0 2 0H602C603.105 0 604 0.895431 604 2C604 3.10457 603.105 4 602 4H2.00001C0.895441 4 0 3.10457 0 2Z"
                    fill="#0E464F"
                  />
                  {/* Active Progress Line */}
                  <path
                    d="M0 2C0 0.895431 0.895431 0 2 0H230C231.105 0 232 0.895431 232 2C232 3.10457 231.105 4 230 4H2C0.895428 4 0 3.10457 0 2Z"
                    fill="#24A0B5"
                  />
                </svg>
              </div>
            </div>

            {/* Progress Bar */}

            {/* Form Container */}
            <div className=" bg-[#08252b] rounded-[32px] border border-[#0e464e] w-full max-w-xl  shadow-md p-4 sm:p-6 md:p-8 mt-6">
              {/* Section 1 - Basic Info */}

              {/* Ticket Details (Now Styled as Requested) */}

              {/* Ticket Details (Updated with New Styles) */}
              <div
                className="w-full max-w-3xl p-6 flex flex-col items-center gap-2 rounded-3xl border-r-2 border-b-2 border-l-2 border-[#07373F] backdrop-blur-[7px] shadow-lg"
                style={{
                  background:
                    "radial-gradient(57.42% 106.59% at 14.02% 32.06%, rgba(36,160,181,0.20) 0%, rgba(36,160,181,0.00) 100%), rgba(10,12,17,0.10)",
                }}
              >
                {/* Event Title */}
                <div className="flex flex-col justify-center items-center gap-2 text-center">
                  <h1 className="text-neutral-50 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal font-['Road Rage'] leading-tight">
                    Techember Fest ’25
                  </h1>
                  <p className="text-neutral-50 text-sm sm:text-base md:text-lg lg:text-xl font-normal font-['Roboto'] max-w-xs sm:max-w-md md:max-w-lg">
                    Join us for an unforgettable experience at [Event Name]!
                    Secure your spot now.
                  </p>
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-white text-sm sm:text-base md:text-lg font-['Roboto']">
                  <span>📍 Lagos, Nigeria</span>
                  <span className="hidden sm:inline">|</span>
                  <span>March 15, 2025 | 7:00 PM</span>
                </div>
              </div>

              {/* Divider Line (Outside the Container) */}
              <div
                data-svg-wrapper
                className="relative w-full mt-6 sm:mt-8 md:mt-10"
              >
                <svg
                  className="w-full h-1 sm:h-1.5 md:h-2"
                  viewBox="0 0 556 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100%" height="100%" fill="#07373F" />
                </svg>
              </div>
              <div className="text-grey-98 text-sm font-extralight block sm:text-base mb-1 mt-4 md:text-sm lg:text-base">
                Select Ticket Type:
              </div>

              <div className="p-4 sm:p-6 md:p-8 bg-[#042127] rounded-3xl border border-[#07363e] flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 w-full max-w-full mx-auto my-5 :my-8">
                {/* Regular Access */}
                <div className="h-[65px] p-2 bg-[#197686] rounded-xl border border-[#197686] flex justify-between items-center w-full sm:w-[calc(33%_-_16px)] gap-2 overflow-hidden">
                  <div className="flex flex-col justify-center items-start gap-1" onClick={() =>
                    setFormData({ ...formData, ticketType: "regular" })
                  }>
                    <div className="text-neutral-50 text-sm sm:text-base font-normal font-['Roboto'] uppercase leading-normal">
                      Regular Access
                    </div>
                    <div className="text-neutral-50 text-xs sm:text-sm font-normal font-['Roboto'] leading-[21px]">
                      20 left!
                    </div>
                  </div>
                  <div className="w-20 p-2 bg-[#0e464e] rounded-lg border border-[#2aa3b8] flex justify-center items-center gap-2.5">
                    <div className="text-neutral-50 text-sm sm:text-xl font-semibold font-['Roboto'] leading-snug">
                      Free
                    </div>
                  </div>
                </div>

                {/* VIP Access */}
                <div className="h-[65px] p-2 rounded-xl border border-[#07363e] flex justify-between items-center w-full sm:w-[calc(33%_-_16px)] gap-2 overflow-hidden">
                  <div className="flex flex-col justify-center items-start gap-1" onClick={() =>
                    setFormData({ ...formData, ticketType: "vip" })
                  }>
                    <div className="text-neutral-50 text-sm sm:text-base font-normal font-['Roboto'] uppercase leading-normal">
                      VIP Access
                    </div>
                    <div className="text-neutral-50 text-xs sm:text-sm font-normal font-['Roboto'] leading-[21px]">
                      20 left!
                    </div>
                  </div>
                  <div className="w-20 p-2 bg-[#0e464e] rounded-lg border border-[#2aa3b8] flex justify-center items-center gap-2.5">
                    <div className="text-right text-neutral-50 text-sm sm:text-xl font-semibold font-['Roboto'] leading-snug">
                      $50
                    </div>
                  </div>
                </div>

                {/* VVIP Access */}
                <div className="h-[65px] p-2 rounded-xl border border-[#07363e] flex justify-between items-center w-full sm:w-[calc(33%_-_16px)] gap-2 overflow-hidden">
                  <div className="flex flex-col justify-center items-start gap-1" onClick={() =>
                    setFormData({ ...formData, ticketType: "vvip" })
                  }>
                    <div className="text-neutral-50 text-sm sm:text-base font-normal font-['Roboto'] uppercase leading-normal">
                      VVIP Access
                    </div>
                    <div className="text-neutral-50 text-xs sm:text-sm font-normal font-['Roboto'] leading-[21px]">
                      20 left!
                    </div>
                  </div>
                  <div className="w-20 p-2 bg-[#0e464e] rounded-lg border border-[#2aa3b8] flex justify-center items-center gap-2.5">
                    <div className="text-right text-neutral-50 text-sm sm:text-xl font-semibold font-['Roboto'] leading-snug">
                      $150
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-grey-98 text-sm font-extralight block sm:text-base mb-1 mt-4 md:text-sm lg:text-base">
                Select Number of Tickets (1-10):
              </div>

              <div className="w-full mt-4">
                <select
                  name="ticketCount"
                  value={formData.ticketCount}
                  onChange={handleInputChange}
                  className="w-full p-2 p-3 sm:p-4 md:p-5  border-[#07363e] justify-start items-center gap-2 inline-flex bg-[#1c2b35] border rounded-xl text-white font-['Roboto']"
                >
                  {[...Array(10)].map((_, index) => (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
              </div>
              {/* Submit Button */}
              <div className="p-4 sm:p-6 md:p-8 flex justify-center items-center gap-6 sm:gap-8 p-4 sm:p-6 md:p-8 bg-[#041e22] rounded-3xl border border-[#0e464f] flex justify-center items-center gap-6 sm:gap-8">
                {/* Cancel Button */}
                <div className="flex-grow flex-shrink basis-0 h-auto px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 overflow-hidden">
                  <div className="text-[#23a0b5] text-sm sm:text-base font-normal font-['JejuMyeongjo'] leading-normal">
                    Cancel
                  </div>
                </div>

                {/* Next Button */}
                <div
                className={`flex-grow flex-shrink basis-0 h-auto px-6 py-3 ${
                  isNextButtonDisabled ? "bg-gray-400" : "bg-[#23a0b5]"
                } rounded-lg justify-center items-center gap-2 overflow-hidden`}
                onClick={!isNextButtonDisabled ? nextStep : undefined}
              > <div
              className={`text-white text-sm sm:text-base font-normal font-['JejuMyeongjo'] leading-normal ${
                isNextButtonDisabled ? "cursor-not-allowed" : ""
              }`}
            >
                    Next
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="w-full flex flex-col gap-3 p-12">
          <div className="rounded-[40px] border border-[#0e464f] bg-[#08252B] flex flex-col items-center justify-center min-h-screen p-12 ">
            {/* Heading */}
            {/* Step Progress Bar (Now on top of everything) */}
            <div className="w-full max-w-xl">
              {/* Ticket Selection Header */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-white text-2xl sm:text-3xl font-['JejuMyeongjo']">
                  Attendee Details
                </h2>
                <span className="text-neutral-50 text-base font-['Roboto']">
                  Step 2/3
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full">
                <svg
                  className="w-full h-1 sm:h-2"
                  viewBox="0 0 604 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background Progress Line */}
                  <path
                    d="M0 2C0 0.895431 0.895431 0 2 0H602C603.105 0 604 0.895431 604 2C604 3.10457 603.105 4 602 4H2.00001C0.895441 4 0 3.10457 0 2Z"
                    fill="#0E464F"
                  />
                  {/* Active Progress Line (Extended) */}
                  <path
                    d="M0 2C0 0.895431 0.895431 0 2 0H540C541.105 0 542 0.895431 542 2C542 3.10457 541.105 4 540 4H2C0.895428 4 0 3.10457 0 2Z"
                    fill="#24A0B5"
                  />
                </svg>
              </div>
            </div>

            {/* Progress Bar */}

            {/* Form Container */}
            <div className=" bg-[#08252b] rounded-[32px] border border-[#0e464e] w-full max-w-xl  shadow-md p-4 sm:p-6 md:p-8 mt-6">
              {/* File Upload Section Above Inputs */}
              <div className="w-full min-h-[344px] p-6 bg-[#042127] rounded-3xl border border-[#07363e] flex flex-col justify-start items-start gap-4 md:gap-8">
                <div className="text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
                  Upload Profile Photo
                </div>
                <div className="self-stretch bg-black/20 justify-center items-center gap-2.5 inline-flex">
                  <div
                    className="w-60 h-60 p-6 bg-[#0e464e] rounded-[32px] flex-col justify-center items-center gap-4 inline-flex"
                    onClick={() => document.getElementById("avatar")?.click()}
                  >
                    {/* Hidden Input */}
                    <input
                      id="avatar"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setFormData({
                            ...formData,
                            avatar: e.target.files[0],
                          });
                        }
                      }}
                    />
                    {/* File Upload Box */}
                    {formData.avatar ? (
                      <img
                        src={URL.createObjectURL(formData.avatar)}
                        alt="Profile Preview"
                        className="w-full h-full object-cover rounded-[32px]"
                      />
                    ) : (
                      <>
                        <div data-svg-wrapper className="relative">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M25.2639 14.816C24.6812 10.2267 20.7505 6.66669 16.0052 6.66669C12.3305 6.66669 9.13854 8.81469 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.872 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33335 16.0052 9.33335C19.6812 9.33335 22.6719 12.324 22.6719 16V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7047C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z"
                              fill="#FAFAFA"
                            />
                            <path
                              d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z"
                              fill="#FAFAFA"
                            />
                          </svg>
                        </div>
                        <div className="self-stretch text-center text-neutral-50 text-base font-normal font-['Roboto'] leading-normal">
                          Drag & drop or click to upload
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div
                data-svg-wrapper
                className="relative w-full mt-6 sm:mt-8 md:mt-10"
              >
                <svg
                  className="w-full h-1 sm:h-1.5 md:h-2"
                  viewBox="0 0 556 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100%" height="100%" fill="#07373F" />
                </svg>
              </div>
              {/* Full Name Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-grey-98 text-sm font-extralight block sm:text-base mb-1 mt-4 md:text-sm lg:text-base"
                >
                  Enter your name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 rounded-lg border border-[#07363e] bg-[#042127] text-white outline-none"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-grey-98 text-sm font-extralight block sm:text-base mb-1 mt-4 md:text-sm lg:text-base"
                >
                  Enter your email*
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 rounded-lg border border-[#07363e] bg-[#042127] text-white outline-none"
                />
              </div>
              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="about-the-project"
                  className="text-grey-98 text-sm font-extralight block sm:text-base mb-1 mt-4 md:text-sm lg:text-base"
                >
                  About the project
                </label>
                <input
                  id="about-the-project"
                  type="text"
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                  className="w-full h-48 sm:h-24 md:h-32 lg:h-40 p-4 rounded-lg border border-[#07363e] bg-[#042127] text-white outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="p-4 sm:p-6 md:p-8 flex justify-center items-center gap-6 sm:gap-8">
                {/* Cancel Button */}
                <div className="flex-grow flex-shrink basis-0 h-auto px-6 py-3 rounded-lg border border-[#23a0b5] justify-center items-center gap-2 overflow-hidden">
                  <div className="text-[#23a0b5] text-center text-sm sm:text-base font-normal font-['JejuMyeongjo'] leading-normal">
                    Cancel
                  </div>
                </div>

                {/* Next Button */}
                <div onClick={handleSubmit} className="flex-grow flex-shrink basis-0 h-auto px-6 py-3 bg-[#23a0b5] rounded-lg justify-center items-center gap-2 overflow-hidden">
                  <div className="text-white text-sm text-center sm:text-base font-normal font-['JejuMyeongjo'] leading-normal">
                    Get My free Ticket
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Booking Confirmation</h2>
          <p>Event: Techember Fest 25</p>
          <p>Ticket Type: {formData.ticketType}</p>
          <p>Ticket Count: {formData.ticketCount}</p>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <button onClick={resetForm}>Generate New Ticket</button>
        </div>
      )}
    </div>
  );
};

export default Form;
