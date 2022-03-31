export const Modal = () => {
  return <div></div>;
};

// import { Dialog, Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";

// interface Props {
//   modalButton: React.ReactNode;
// }

// const size = {
//   sm: "py-2 px-6 text-sm",
//   md: "py-2 px-10 text-md",
//   lg: "py-3 px-14 text-lg",
// };

// export const Modal = ({ modalButton }: Props) => {
//   const [open, setOpen] = useState<boolean>(false);
//   return (
//     <>
//       {modalButton}
//       <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="overflow-y-auto fixed inset-0 z-10" onClose={setOpen}>
//           <div className="flex justify-center items-center p-0 px-4 pt-4 pb-20 min-h-screen">
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0"
//               enterTo="opacity-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//             </Transition.Child>

//             {/* This element is to trick the browser into centering the modal contents. */}
//             <span className="hidden h-screen align-middle" aria-hidden="true">
//               &#8203;
//             </span>
//             <Transition.Child
//               as={Fragment}
//               enter="ease-out duration-300"
//               enterFrom="opacity-0 translate-y-4 scale-95"
//               enterTo="opacity-100 translate-y-0 scale-100"
//               leave="ease-in duration-200"
//               leaveFrom="opacity-100 translate-y-0 scale-100"
//               leaveTo="opacity-0 translate-y-4 scale-95"
//             >
//               <div className="inline-block my-8 w-full max-w-xl align-bottom bg-white rounded-xl shadow-xl transition-all transform">
//                 <div className="p-6 px-4 pt-5 pb-4">
//                   <div className="flex items-start">
//                     <div className="mt-0 w-full"></div>
//                   </div>
//                 </div>
//                 {/* <div className="flex flex-row-reverse py-3 px-6 bg-gray-50 rounded-b-xl">
//                   <Button onClick={() => handleSubscriptionSubmit()}>Add subscription</Button>
//                 </div> */}
//               </div>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>
//     </>
//   );
// };
