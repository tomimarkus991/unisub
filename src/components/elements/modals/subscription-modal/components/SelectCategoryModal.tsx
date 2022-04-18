/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dialog, RadioGroup } from "@headlessui/react";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import { useState } from "react";

import { cardColors, categories, scrollbarStyles } from "app-constants";
import {
  InputErrorText,
  Modal,
  RealButton,
  Rotate360Anim,
  SubFormValues,
} from "components/elements";
import { CategoryCardItem } from "types";

interface Props {
  name: string;
}

export const SelectCategoryModal = ({ name }: Props) => {
  const [open, setOpen] = useState(false);
  const [field, { touched, error }] = useField<CategoryCardItem>(name);
  const { setFieldValue, values } = useFormikContext<SubFormValues>();

  return (
    <>
      <div className="mb-2">
        <label htmlFor="category-input">Category</label>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        size="xs"
        modalButton={
          <>
            <RealButton
              id="category-input"
              variant="light"
              className="overflow-x-hidden py-2.5 px-2 w-full font-medium rounded-lg xs:py-2 xs:text-lg xs:font-semibold"
              onClick={() => {
                setOpen(true);
              }}
            >
              {field.value.name}
            </RealButton>
            <InputErrorText touched={touched} error={error} />
          </>
        }
      >
        <div className="bg-white rounded-xl">
          <div className="flex flex-row justify-between items-center p-2 shadow-md">
            <div role="button" tabIndex={0} onClick={() => setOpen(open => !open)}>
              <Rotate360Anim>
                <ArrowLeftIcon className="w-8 h-8 fill-slate-700 hover:fill-slate-800" />
              </Rotate360Anim>
            </div>
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-center text-gray-700 uppercase"
            >
              Select category
            </Dialog.Title>
            <ArrowLeftIcon className="w-8 h-8 opacity-0" />
          </div>
          <div
            className={clsx(
              scrollbarStyles,
              "flex overflow-y-auto items-start p-2 h-[55vh] min-h-[15rem]"
            )}
          >
            <div className="flex justify-center items-center w-full">
              <RadioGroup
                className="grid grid-cols-2 mt-3"
                value={field.value}
                onChange={value => {
                  setFieldValue(name, value);
                }}
              >
                {categories.map(category => (
                  <RadioGroup.Option value={category} key={category.name}>
                    {({ checked }) => (
                      <div
                        className={clsx(
                          scrollbarStyles,
                          "overflow-x-auto py-4 px-2 mr-3 mb-2 font-semibold text-center text-gray-800 text-ellipsis whitespace-nowrap rounded-md ring-2 ring-black ring-opacity-5 cursor-pointer",
                          // `hover:${cardColors[values.selectedColor]}`,
                          "hover:bg-gradient-to-br hover:from-slate-50 hover:via-slate-200 hover:to-white",
                          checked ? `${cardColors[values.selectedColor]}` : "",
                          checked ? `${values.selectedColor !== "white" && "text-white"}` : ""
                        )}
                        role="button"
                        tabIndex={0}
                        onClick={() => setOpen(false)}
                      >
                        {category.name}
                      </div>
                    )}
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
