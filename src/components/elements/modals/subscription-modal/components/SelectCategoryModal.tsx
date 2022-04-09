/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dialog, RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

import { cardColors, categories } from "app-constants";
import { Modal, RealButton } from "components/elements";
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
      <Modal
        open={open}
        setOpen={setOpen}
        modalButton={
          <RealButton
            id="category-input"
            variant="light"
            className="overflow-x-hidden py-2.5 px-2 w-full font-medium rounded-lg xs:py-2 xs:text-lg xs:font-semibold"
            onClick={() => {
              setOpen(true);
            }}
          >
            {value.name}
          </RealButton>
        }
      >
        <div className="p-6 px-4 pt-5 pb-4">
          <div className="flex items-start">
            <div className="mt-0 w-full">
              <Dialog.Title
                as="h3"
                className="mb-3 text-lg font-medium leading-6 text-center text-gray-700 uppercase"
              >
                Select category
              </Dialog.Title>
              <RadioGroup className="grid grid-cols-2 mt-6" value={value} onChange={setValue}>
                {categories.map(category => (
                  <RadioGroup.Option value={category} key={category.name}>
                    {({ checked }) => (
                      <div
                        className={clsx(
                          "overflow-x-auto py-4 px-2 mr-3 mb-2 font-semibold text-center text-gray-700 text-ellipsis whitespace-nowrap rounded-md ring-2 ring-black ring-opacity-5 cursor-pointer scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-100 active:scrollbar-thumb-slate-600",
                          `hover:${cardColors[selectedColor]}`,
                          checked
                            ? `${cardColors[selectedColor]} 
                                    ${
                                      selectedColor === "white"
                                        ? "text-gray-800 hover:text-gray-800"
                                        : "text-white hover:text-white"
                                    }`
                            : ""
                        )}
                        role="button"
                        tabIndex={0}
                        onClick={() => setOpen(false)}
                      >
                        <p>{category.name}</p>
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
      </Modal>
    </>
  );
};
