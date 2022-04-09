/* eslint-disable jsx-a11y/no-autofocus */
import clsx from "clsx";

const sizes = {
  sm: "py-2 text-md",
  md: "py-2 text-lg",
  lg: "py-3 text-xl",
};

const variants = {
  // regular --> hover --> active --> dark
  default: `bg-white text-slate-700 border-slate-600 rounded-lg ring-2 ring-black ring-opacity-10 focus:ring-slate-500`,
  green: `bg-lime-500 text-[#f3f2f0] border-lime-600
  hover:text-white`,
  dark: `bg-gray-700 text-[#f3f2f0] border-gray-900
    hover:text-white`,
  blue: `bg-blue-700 text-[#f3f2f0] border-blue-900
    hover:text-white`,
};

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: keyof typeof variants;
  inputSize?: keyof typeof sizes;
};

export const Input = ({
  className = "px-4 font-medium",
  inputSize = "md",
  variant = "default",
  ...props
}: InputProps) => {
  return (
    <input
      autoFocus={false}
      autoComplete="off"
      className={clsx(className, sizes[inputSize], variants[variant])}
      {...props}
    />
  );
};
