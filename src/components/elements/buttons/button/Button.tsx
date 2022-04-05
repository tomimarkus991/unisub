import clsx from "clsx";
import React from "react";
import { useTranslation } from "react-i18next";

const sizes = {
  sm: "py-2 px-6 text-sm",
  md: "py-2 px-10 text-md",
  lg: "py-3 px-14 text-lg",
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
        `m-0 font-medium tracking-wider text-center uppercase rounded-2xl transition-all duration-200 ease-in-out hover:scale-110 select-none`,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <p className={clsx(variant !== "light" && "text-white")}>{t(children)}</p>
    </button>
  );
};
