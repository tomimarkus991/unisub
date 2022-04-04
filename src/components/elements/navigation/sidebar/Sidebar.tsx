import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";

import { useSidebar } from "context/sidebar";

export const Sidebar = () => {
  const { isSidebarOpen, setisSidebarOpen } = useSidebar();
  return (
    <Transition.Root show={isSidebarOpen}>
      <Dialog as="div" className="overflow-y-auto fixed inset-0 z-50" onClose={setisSidebarOpen}>
        <Transition.Child
          enter="transition-opacity ease-linear duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-75"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <nav className="absolute top-0 right-0 z-30 w-6/12 h-full bg-white">
            <div className="flex justify-end">
              <button onClick={() => setisSidebarOpen(isOpen => !isOpen)}>
                <XIcon className="w-12 h-12 fill-slate-700 hover:fill-slate-800" />
              </button>
            </div>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </nav>
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        {/* <Transition.Child
          enter="transition ease-in-out duration-150 transform"
          enterFrom="translate-x-20"
          enterTo="-translate-x-0"
          // leave="transition ease-in-out duration-150 transform"
          // leaveFrom="-translate-x-14"
          // leaveTo="translate-x-0"
        >

        </Transition.Child> */}
      </Dialog>
    </Transition.Root>
  );
};
