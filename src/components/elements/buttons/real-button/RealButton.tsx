import clsx from "clsx";
import React from "react";

const sizes = {
  sm: "py-2 px-10 text-sm",
  md: "py-2 px-14 text-md",
  lg: "py-3 px-18 text-lg",
};

const variants = {
  // regular --> hover --> active --> dark
  green: `bg-lime-500 text-[#f3f2f0] border-lime-600
    hover:text-white
    active:border-lime-500
    dark:bg-lime-700 dark:border-lime-800 dark:active:border-lime-700`,
  dark: `bg-gray-700 text-[#f3f2f0] border-gray-900
    hover:text-white
    active:border-gray-700
    dark:bg-gray-700 dark:border-gray-900 dark:active:border-gray-700`,
  light: `bg-slate-50 text-slate-700 border-slate-200
    hover:text-gray-800
    active:border-slate-50`,
  blue: `bg-blue-700 text-[#f3f2f0] border-blue-900
    hover:text-white
    active:border-blue-700
    dark:bg-blue-700 dark:border-blue-900 dark:active:border-blue-700`,
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: string | React.ReactNode;
};

export const RealButton = ({
  type = "button",
  className = "",
  variant = "dark",
  size = "md",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(
        `m-0 font-medium tracking-wider text-center rounded-2xl border-b-[6px] 
          transition-all duration-300 active:duration-75 hover:-translate-y-[0.15rem] active:translate-y-[0.2rem] touch-manipulation select-none
          `,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
