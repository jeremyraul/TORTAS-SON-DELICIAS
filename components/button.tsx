"use client";

export const Button = ({ texto, variant, onClick }) => {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className="text-sm bg-red-600 hover:bg-cyan-600 rounded-lg px-8 py-2 text-white"
      >
        {texto}
      </button>
    );
  } else if (variant === "secondary") {
    return (
      <button
        onClick={onClick}
        className="text-sm border-2 border-gray-300 bg-white hover:bg-white-600  rounded-lg px-8 py-2 text-black"
      >
        {texto}
      </button>
    );
  }
  return null;
};
