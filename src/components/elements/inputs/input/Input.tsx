/* eslint-disable jsx-a11y/no-autofocus */
import clsx from "clsx";
import { useField } from "formik";
import { ReactNode } from "react";

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

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string | ReactNode;
  name: string;
  variant?: keyof typeof variants;
  inputSize?: keyof typeof sizes;
};

export const Input = ({
  label = "Label",
  name,
  className = "px-4 font-medium",
  inputSize = "md",
  variant = "default",
  ...props
}: Props) => {
  const [field, meta] = useField(name);
  return (
    <>
      <div className="mb-2">
        <label htmlFor={props.id || name}>{label}</label>
      </div>
      <input
        className={clsx(className, sizes[inputSize], variants[variant])}
        autoFocus={false}
        autoComplete="off"
        {...field}
        {...props}
      />
      {meta.touched && meta.error && <div>{meta.error}</div>}
    </>
  );
};
