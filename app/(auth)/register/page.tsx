"use client";
import React, { useState } from "react";
import { Leftbanner } from "../components/Leftbanner";
import { Register } from "../components/register";
import { useRouter } from "next/navigation";

const Home = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const handleNextStep = () => {
    setStep((previousStep) => previousStep + 1);
  };
  const handlePreviousStep = () => {
    setStep((previousStep) => Math.max(previousStep - 1, 0));
  };
  const handleRegisterSuccess = () => {
    router.push("/app/(auth)/login");
  };
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2">
        <Leftbanner />
      </div>

      <div className=" bg-white flex flex-col w-full">
        <Register
          step={step}
          handleNextStep={handleNextStep}
          handlePreviousStep={handlePreviousStep}
          onSuccess={handleRegisterSuccess}
        />
      </div>
    </div>
  );
};

export default Home;
