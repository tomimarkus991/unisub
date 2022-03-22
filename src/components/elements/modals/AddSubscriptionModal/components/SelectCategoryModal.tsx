/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";

import { Button } from "components/elements";

import { CategoryCardItem, cardColors, CardColorType } from "..";

interface Props {
  options: CategoryCardItem[];
  value: CategoryCardItem;
  setValue: React.Dispatch<React.SetStateAction<CategoryCardItem>>;
  selectedColor: CardColorType;
}

export const SelectCategoryModal = ({ options, value, setValue, selectedColor }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mb-2">
        <label htmlFor="category-input">Category</label>
      </div>
      <Button
        id="category-input"
        variant="light"
        className="text-sm px-0 w-full py-2"
        onClick={() => {
          setOpen(true);
        }}
      >
        {value.name}
      </Button>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 p-0">
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
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-xl shadow-xl transform transition-all my-8 max-w-xl w-full">
                <div className="px-4 pt-5 p-6 pb-4">
                  <div className="flex items-start">
                    <div className="mt-0 w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-center text-lg mb-3 leading-6 font-medium text-gray-700 uppercase"
                      >
                        Select category
                      </Dialog.Title>
                      <RadioGroup
                        className="grid grid-cols-2 mt-6"
                        value={value}
                        onChange={setValue}
                      >
                        {options.map(category => (
                          <RadioGroup.Option value={category} key={category.name}>
                            {({ checked }) => (
                              <div
                                onClick={() => setOpen(false)}
                                className={clsx(
                                  "mr-3 mb-2 rounded-md cursor-pointer text-sm py-4 ring-2 ring-black ring-opacity-5 text-center text-ellipsis whitespace-nowrap overflow-scroll",
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
                <div className="bg-gray-50 px-6 py-3 flex flex-row-reverse rounded-b-xl">
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
