import React, { useState } from "react";
import { Button } from "./button";
type RegisterFormProps = {
  step: number;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  onSuccess: () => void;
};

export const Register = ({
  step,
  handleNextStep,
  handlePreviousStep,
  onSuccess,
}: RegisterFormProps) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (field: keyof typeof userData, value: string) => {
    setUserData((previousData) => ({
      ...previousData,
      [field]: value,
    }));
  };
  const handleRegister = async () => {
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) return;
    onSuccess();
  };
  const inputclass =
    "h-10 px-4 py-2 flex w-89.75 border-[#E4E4E7] items-center rounded-md border bg-white";
  return (
    <div className="w-full flex flex-col min-h-screen justify-center items-center relative">
      {step === 0 && (
        <div>
          <button className="absolute top-10 right-10 px-4 py-2 flex justify-center items-center w-[95px] h-[40px] rounded-md bg-[#F4F4F5]">
            <span className="text-[14px] font-medium"> Log in</span>
          </button>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-[24px] font-semibold leading-8">
                Create Your Account
              </span>
              <span className="text-[#71717A] text-[14px]">
                Choose a username for your page
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[14px] font-medium">Username</span>
              <input
                value={userData.username}
                onChange={(event) =>
                  handleChange("username", event.target.value)
                }
                placeholder="Enter username here"
                className={`${inputclass}`}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="py-2">
              <Button onClick={handleNextStep} />
            </div>
          </div>
        </div>
      )}
      {step === 1 && (
        <div>
          <div className="flex flex-col gap-4">
            <div className="">
              <span className="text-[24px] font-semibold leading-8">
                Welcome
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[14px] font-medium">Email</span>
              <input
                value={userData.email}
                onChange={(event) => handleChange("email", event.target.value)}
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
                value={userData.password}
                onChange={(event) =>
                  handleChange("password", event.target.value)
                }
                placeholder="Enter password here"
                className={`${inputclass}`}
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="py-2">
              <Button onClick={handleRegister} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
