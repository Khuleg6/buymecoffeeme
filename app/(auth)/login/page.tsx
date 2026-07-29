"use client";
import { useState } from "react";
import { Leftbanner } from "../components/Leftbanner";
import { Login } from "../components/Login";
import { Register } from "../components/register";

const Home = () => {
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleNextStep = () => {
    setStep((previousStep) => previousStep + 1);
  };

  const handlePreviousStep = () => {
    setStep((previousStep) => Math.max(previousStep - 1, 0));
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-1/2">
        <Leftbanner />
      </div>
      <div className=" bg-white flex flex-col w-full">
        <Login />
      </div>
    </div>
  );
};

export default Home;
