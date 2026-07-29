import React from "react";
import { Button } from "./button";

export const Login = () => {
  const inputclass =
    "h-10 px-4 py-2 flex w-89.75 border-[#E4E4E7] items-center rounded-md border bg-white";
  return (
    <div className="w-full flex flex-col min-h-screen justify-center items-center relative">
      <button className="absolute top-10 right-10 px-4 py-2 flex justify-center items-center w-[95px] h-[40px] rounded-md bg-[#F4F4F5]">
        <span className="text-[14px] font-medium"> Sign up</span>
      </button>

      <div className="flex flex-col gap-4">
        <div className="">
          <span className="text-[24px] font-semibold leading-8">
            Welcome Back
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[14px] font-medium">Email</span>
          <input
            placeholder="Enter email here"
            className={`${inputclass}`}
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[14px] font-medium">Password</span>
          <input
            placeholder="Enter password here"
            className={`${inputclass}`}
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="py-2">
          <Button />
        </div>
      </div>
    </div>
  );
};
