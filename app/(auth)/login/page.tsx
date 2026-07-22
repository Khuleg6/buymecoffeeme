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
      <Leftbanner />
      <div className=" bg-white flex flex-col">
        <div className="">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;
