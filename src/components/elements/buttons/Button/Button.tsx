import clsx from "clsx";
import React from "react";
import { useTranslation } from "react-i18next";

// interface Props {
//   children: string;
//   onClick: () => void;
//   variant: "green" | "secondary" | "tertiary";
// }
const sizes = {
  sm: "py-2 px-10 text-sm",
  md: "py-2 px-14 text-md",
  lg: "py-3 px-18 text-lg",
};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  children: string;
  onClick: () => void;
};

const variants = {
  // regular --> hover --> active --> dark
  green:
    "bg-lime-500 text-[#f3f2f0] border-lime-600 hover:bg-lime-400 hover:text-white active:border-lime-400 active:translate-y-1 active:duration-75 dark:bg-lime-700 dark:border-lime-900 dark:active:border-lime-700",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type = "button", className = "", variant = "green", size = "md", children, ...props },
    ref
  ) => {
    const { t } = useTranslation();
    return (
      <button
        ref={ref}
        type={type}
        className={clsx(
          `transition-all duration-300 rounded-2xl font-bold tracking-wider text-center border-b-4 
          uppercase select-none touch-manipulation m-0
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
  }
);

Button.displayName = "Button";
