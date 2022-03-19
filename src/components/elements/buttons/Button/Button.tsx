import clsx from "clsx";
import React from "react";
import { useTranslation } from "react-i18next";

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
  blue: `bg-blue-700 text-[#f3f2f0] border-blue-900
    hover:text-white
    active:border-blue-700
    dark:bg-blue-700 dark:border-blue-900 dark:active:border-blue-700`,
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: string;
};

export const Button = ({
  type = "button",
  className = "",
  variant = "dark",
  size = "md",
  children,
  ...props
}: ButtonProps) => {
  const { t } = useTranslation();
  return (
    <button
      type={type}
      className={clsx(
        `transition-all duration-300 rounded-2xl font-medium tracking-wider text-center border-b-[6px] 
          uppercase select-none touch-manipulation m-0 hover:-translate-y-[0.15rem] active:translate-y-[0.2rem] active:duration-75
          `,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="mx-4">{t(children)}</span>
    </button>
  );
};
