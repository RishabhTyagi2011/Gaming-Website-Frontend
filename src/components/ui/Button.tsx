import React from "react";

export const Button = ({
  onClick,
  children,
  className,
}: {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-2 text-2xl bg-green-500  text-white font-bold rounded ${className}`}
    >
      {children}
    </button>
  );
};
