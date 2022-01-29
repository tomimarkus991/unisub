import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GreenButton = ({ children }: Props) => {
  return (
    <button
      className={`bg-lime-500 text-[#f3f2f0] hover:bg-lime-400 hover:text-white border-lime-600 active:border-lime-400
      transition-all active:translate-y-1 active:duration-75
      rounded-2xl text-lg font-bold tracking-wider px-20 py-3 m-0 text-center border-b-4 
      duration-300 uppercase select-none touch-manipulation
      dark:bg-lime-800`}
    >
      {children}
    </button>
  );
};

// .button-83 {
//   appearance: button;
//   background-color: transparent;
//   background-image: linear-gradient(to bottom, #fff, #f8eedb);
//   border: 0 solid #e5e7eb;
//   border-radius: .5rem;
//   box-sizing: border-box;
//   color: #482307;
//   column-gap: 1rem;
//   cursor: pointer;
//   display: flex;
//   font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
//   font-size: 100%;
//   font-weight: 700;
//   line-height: 24px;
//   margin: 0;
//   outline: 2px solid transparent;
//   padding: 1rem 1.5rem;
//   text-align: center;
//   text-transform: none;
//   transition: all .1s cubic-bezier(.4, 0, .2, 1);
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   box-shadow: -6px 8px 10px rgba(81,41,10,0.1),0px 2px 2px rgba(81,41,10,0.2);
// }

// .button-83:active {
//   box-shadow: -1px 2px 5px rgba(81,41,10,0.15),0px 1px 1px rgba(81,41,10,0.15);
// }

// .button-83:focus {
//   box-shadow: rgba(72, 35, 7, .46) 0 0 0 4px, -6px 8px 10px rgba(81,41,10,0.1), 0px 2px 2px rgba(81,41,10,0.2);
// }
