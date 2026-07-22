import React from "react";

export const Login = () => {
  const inputclass =
    "h-10 px-4 py-2 flex items-center rounded-md border bg-white";
  return (
    <div className="w-1/2 flex flex-col relative">
      <div className="absolute top-10 right-16">
        <button className=" px-4 py-2 flex justify-center items-center w-[95px] h-[40px] rounded-md bg-[#F4F4F5]">
          <span className="text-[14px] font-medium"> Sign up</span>
        </button>
      </div>
      <div className="flex flex-col">
        <div>
          <span>Welcome Back</span>
        </div>
        <div>
          <input className={`${inputclass}`} type="text" name="" id="" />
        </div>
      </div>
    </div>
  );
};
