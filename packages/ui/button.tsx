import React from "react";

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className=" bg-violet-500 p-2 text-white  rounded-md w-full">
      {children}
    </button>
  );
}
