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

// span .inline-block text-center rounded-lg px-5 py-2 -translate-y-1.5 hover:-translate-y-2.5 duration-300
//   text-white bg-accent-primary
//  {	/* Font & Text */	font-family: Saira;	font-size: 16px;	font-style: normal;	font-variant: normal;
//   	font-weight: 400;	letter-spacing: normal;	line-height: 24px;	text-decoration: rgb(255, 255, 255);
//     	text-align: center;	text-indent: 0px;	text-transform: none;	vertical-align: baseline;
// white-space: normal;	word-spacing: 0px;	/* Color & Background */	background-attachment: scroll;
// 	background-color: rgb(77, 88, 111);	background-image: none;	background-position: 0% 0%;
//   	background-repeat: repeat;	color: rgb(255, 255, 255);	/* Box */	height: 40px;
//     	width: 100.983px;	border: 0px solid rgb(229, 231, 235);
//       	border-top: 0px solid rgb(229, 231, 235);	border-right: 0px solid rgb(229, 231, 235);
//   border-bottom: 0px solid rgb(229, 231, 235);	border-left: 0px solid rgb(229, 231, 235);
//   margin: 0px;	padding: 8px 24px;	max-height: none;	min-height: 0px;	max-width: none;
//   min-width: 0px;	/* Positioning */	position: static;	top: auto;	bottom: auto;	right: auto;
//   left: auto;	float: none;	display: inline-block;	clear: none;	z-index: auto;
//   /* List */	list-style-image: none;	list-style-type: disc;	list-style-position: outside;
//   	/* Table */	border-collapse: separate;	border-spacing: 0px 0px;	caption-side: top;
//     	empty-cells: show;	table-layout: auto;	/* Miscellaneous */	overflow: visible;
//       	cursor: pointer;	visibility: visible;	/* Effects */	transform: matrix(1, 0, 0, 1, 0, -6);
//         	transition: all 0.3s ease 0s;	outline: rgb(255, 255, 255) dashed 0px;	outline-offset: 0px;
//           	box-sizing: border-box;	resize: none;	text-shadow: none;	text-overflow: clip;
//             	word-wrap: normal;	box-shadow: none;	border-top-left-radius: 8px;
//               	border-top-right-radius: 8px;	border-bottom-left-radius: 8px;
//                 	border-bottom-right-radius: 8px;}
