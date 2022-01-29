import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PrimaryButton = ({ children }: Props) => {
  return (
    <button
      className={`bg-lime-500 text-[#f3f2f0] hover:bg-lime-400 hover:text-white border-lime-600 active:border-lime-400
      transition-all active:translate-y-1 active:duration-75
      rounded-2xl text-lg font-bold tracking-wider px-20 py-3 m-0 text-center border-b-4 
      duration-300 uppercase select-none touch-manipulation`}
    >
      {children}
    </button>
  );
};
