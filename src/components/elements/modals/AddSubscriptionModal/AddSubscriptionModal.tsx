import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { Button, Input } from "components/elements";

import { ColorPicker, SelectCategoryModal, SubscriptionCard } from "./components";

export const cardColors = {
  green: "bg-green-600",
  orange: "bg-orange-500",
  blue: "bg-blue-600",
  purple: "bg-purple-600",
  red: "bg-red-500",
  yellow: "bg-yellow-400",
  gray: "bg-gray-600",
  white: "bg-slate-200",
  // white: "bg-white",
};

export interface CategoryCardItem {
  name: string;
  icon: string;
}

export const categories: CategoryCardItem[] = [
  { name: "Other", icon: "test-icon" },
  { name: "Entertainment", icon: "test-icon" },
  { name: "Gaming", icon: "test-icon" },
  { name: "Sport", icon: "test-icon" },
];

export type CardColorType = keyof typeof cardColors;

export const AddSubscriptionModal = () => {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<CardColorType>("white");
  const [title, setTitle] = useState("Sub name");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

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
        <Dialog as="div" className="overflow-y-auto fixed inset-0 z-10" onClose={setOpen}>
          <div className="flex justify-center items-center p-0 px-4 pt-4 pb-20 min-h-screen">
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
            <span className="hidden h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <div className="inline-block my-8 w-full max-w-xl align-bottom bg-white rounded-xl shadow-xl transition-all transform">
                <div className="p-6 px-4 pt-5 pb-4">
                  <div className="flex items-start">
                    <div className="mt-0 w-full">
                      <Dialog.Title
                        as="h3"
                        className="mb-3 text-lg font-medium leading-6 text-center text-gray-700 uppercase"
                      >
                        Add a new Subscription
                      </Dialog.Title>
                      <SubscriptionCard
                        title={title}
                        category={selectedCategory.name}
                        price="7€ per month"
                        cardColor={selectedColor}
                        imageUrl={""}
                      />
                      <Dialog.Title
                        as="h3"
                        className="mt-4 text-lg font-medium leading-6 text-left text-gray-700"
                      >
                        General
                      </Dialog.Title>
                      <div className="mt-4">
                        <div className="flex flex-row">
                          <div className="w-6/12 sm:w-full">
                            <div className="mb-2">
                              <label htmlFor="name-input">Name</label>
                            </div>
                            <Input
                              id="name-input"
                              className="px-6 w-11/12"
                              maxLength={30}
                              onChange={e => setTitle(e.target.value)}
                            />
                          </div>
                          <div className="w-6/12 sm:w-full">
                            <SelectCategoryModal
                              options={categories}
                              value={selectedCategory}
                              setValue={setSelectedCategory}
                              selectedColor={selectedColor}
                            />
                          </div>
                        </div>
                        <ColorPicker
                          selectedColor={selectedColor}
                          setSelectedColor={setSelectedColor}
                        />
                      </div>
                      <Dialog.Title
                        as="h3"
                        className="mt-4 text-lg font-medium leading-6 text-left text-gray-700"
                      >
                        Billing
                      </Dialog.Title>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse py-3 px-6 bg-gray-50 rounded-b-xl">
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
