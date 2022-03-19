import clsx from "clsx";

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

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: keyof typeof variants;
  inputSize?: keyof typeof sizes;
};

export const Input = ({
  className = "",
  inputSize = "sm",
  variant = "dark",
  ...props
}: InputProps) => {
  return <input className={clsx(className, sizes[inputSize], variants[variant])} {...props} />;
};
