import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { Button, Input, SelectField } from "components/elements";

import { ColorPicker, SubscriptionCard } from "./components";

export const cardColors = {
  green: "bg-green-600",
  orange: "bg-orange-500",
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  red: "bg-red-500",
  yellow: "bg-yellow-400",
  gray: "bg-gray-600",
  white: "bg-slate-200",
};

const categories = [
  { id: 1, name: "Entertainment" },
  { id: 2, name: "Gaming" },
  { id: 3, name: "Sport" },
];

export type CardColorType = keyof typeof cardColors;

export const AddSubscriptionModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<CardColorType>("white");
  const [title, setTitle] = useState("");

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Add subscription
      </Button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden align-middle h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 sm:translate-y-4 translate-y-0 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 sm:translate-y-4 translate-y-0 scale-95"
            >
              <div className="inline-block sm:align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 max-w-lg w-full">
                <div className="bg-white px-4 pt-5 p-6 pb-4">
                  <div className="flex items-start">
                    <div className="sm:mt-3 sm:text-center mt-0 sm:ml-4 text-left w-full">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-700">
                        Add a new Subscription
                      </Dialog.Title>
                      <SubscriptionCard
                        title={title}
                        category="Entertainment"
                        price="7€ per month"
                        cardColor={selectedColor}
                        imageUrl={""}
                      />
                      <ColorPicker
                        selectedColor={selectedColor}
                        setSelectedColor={setSelectedColor}
                      />
                      <div className="mt-4">
                        <Input
                          className="max-w-screen-sm px-6"
                          onChange={e => setTitle(e.target.value)}
                        />
                        <SelectField options={categories} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 sm:px-4 py-3 px-6 flex flex-row-reverse">
                  <p>bottom</p>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
