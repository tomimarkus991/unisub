import clsx from "clsx";

const sizes = {
  sm: "py-2 text-md",
  md: "py-2 text-lg",
  lg: "py-3 text-xl",
};

const variants = {
  // regular --> hover --> active --> dark
  default: `bg-slate-200 text-slate-700 border-slate-600 rounded-full
    dark:bg-lime-700 dark:border-lime-800 dark:active:border-lime-700`,
  green: `bg-lime-500 text-[#f3f2f0] border-lime-600
    hover:text-white
    dark:bg-lime-700 dark:border-lime-800 dark:active:border-lime-700`,
  dark: `bg-gray-700 text-[#f3f2f0] border-gray-900
    hover:text-white
    dark:bg-gray-700 dark:border-gray-900 dark:active:border-gray-700`,
  blue: `bg-blue-700 text-[#f3f2f0] border-blue-900
    hover:text-white
    dark:bg-blue-700 dark:border-blue-900 dark:active:border-blue-700`,
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
  return <input className={clsx(className, sizes[inputSize], variants[variant])} {...props} />;
};
