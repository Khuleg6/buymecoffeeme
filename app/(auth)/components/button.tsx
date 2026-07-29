import React from "react";
type ButtonProps = {
  onClick: () => void;
};

export const Button = ({ onClick }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-[#E4E4E7] h-10 py-2 px-4 rounded-md w-89.75"
      >
        <span className="text-white">Continue</span>
      </button>
    </div>
  );
};
