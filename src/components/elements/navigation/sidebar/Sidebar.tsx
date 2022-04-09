import { Dialog, Transition } from "@headlessui/react";
import { ChartBarIcon, HomeIcon, XIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { useSidebar } from "context/sidebar";

interface ListItemProps {
  children: ReactNode;
  to: string;
}

const ListItem = ({ children, to }: ListItemProps) => {
  return (
    <Link to={to}>
      <div className="flex flex-row items-center py-2 px-5 hover:bg-slate-100 cursor-pointer">
        {children}
      </div>
    </Link>
  );
};

export const Sidebar = () => {
  const { isSidebarOpen, setisSidebarOpen } = useSidebar();
  const listIconClasses = "mr-3 w-8 h-8 fill-gray-800";
  return (
    <div id="div before transition" className="">
      <Transition.Root show={isSidebarOpen}>
        <Dialog id="dialog" as="div" className="fixed inset-0 z-50" onClose={setisSidebarOpen}>
          <Transition.Child
            as="div"
            id="child transition"
            className="h-full"
            enter="transition ease-in-out duration-200 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="flex absolute top-0 right-0 z-[900] flex-col w-8/12 h-full bg-white">
              <div className="flex justify-end p-3">
                <button onClick={() => setisSidebarOpen(isOpen => !isOpen)}>
                  <XIcon className="w-12 h-12 fill-slate-700 hover:fill-slate-800" />
                </button>
              </div>
              <div className="h-full">
                <ListItem to="/">
                  <HomeIcon className={clsx(listIconClasses)} />
                  <p className="text-xl font-medium">Home</p>
                </ListItem>
                <ListItem to="/">
                  <ChartBarIcon className={clsx(listIconClasses)} />
                  <p className="text-xl font-medium">Stats</p>
                </ListItem>
              </div>
            </div>
          </Transition.Child>
          <Transition.Child
            as="div"
            enter="transition-opacity ease-linear duration-[150]"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-[400]"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
