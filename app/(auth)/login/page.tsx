"use client";
import React, { useState } from "react";
import { Leftbanner } from "../components/Leftbanner";
import { Login } from "../components/Login";

const Home = () => {
  const [step, useStep] = useState<"username" | "account" | "success">(
    "username",
  );
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
