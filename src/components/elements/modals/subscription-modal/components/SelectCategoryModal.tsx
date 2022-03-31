/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";

import { cardColors, categories } from "app-constants";
import { RealButton } from "components/elements";
import { CategoryCardItem, CardColorType } from "types";

interface Props {
  value: CategoryCardItem;
  setValue: React.Dispatch<React.SetStateAction<CategoryCardItem>>;
  selectedColor: CardColorType;
}

export const SelectCategoryModal = ({ value, setValue, selectedColor }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mb-2">
        <label htmlFor="category-input">Category</label>
      </div>
      <RealButton
        id="category-input"
        variant="light"
        className="py-3 px-0 w-full text-sm font-semibold sm:py-2 sm:text-base"
        onClick={() => {
          setOpen(true);
        }}
      >
        {value.name}
      </RealButton>
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
                        Select category
                      </Dialog.Title>
                      <RadioGroup
                        className="grid grid-cols-2 mt-6"
                        value={value}
                        onChange={setValue}
                      >
                        {categories.map(category => (
                          <RadioGroup.Option value={category} key={category.name}>
                            {({ checked }) => (
                              <div
                                //  @todo fix this shit
                                onClick={() => setOpen(false)}
                                className={clsx(
                                  "overflow-x-auto py-4 mr-3 mb-2 text-sm text-center text-ellipsis whitespace-nowrap hover:bg-slate-200 rounded-md ring-2 ring-black ring-opacity-5 cursor-pointer scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-100 active:scrollbar-thumb-slate-600",
                                  checked
                                    ? `${cardColors[selectedColor]} ${
                                        selectedColor === "white" ? "text-slate-800" : "text-white"
                                      }`
                                    : ""
                                )}
                              >
                                <span role="button" tabIndex={0} onClick={() => setOpen(false)}>
                                  {category.name}
                                </span>
                              </div>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </RadioGroup>
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
