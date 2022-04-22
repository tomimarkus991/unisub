import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import { useState } from "react";

import { cardColors, categories, scrollbarStyles } from "app-constants";
import { InputErrorText, Modal, ModalHeaderGoOneBack, RealButton, SubFormValues } from "components";
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
        maxWidth="sm"
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
        <ModalHeaderGoOneBack setOpen={setOpen}>Category</ModalHeaderGoOneBack>
        <div
          className={clsx(
            scrollbarStyles,
            "flex overflow-y-auto items-start py-2 px-4 h-[55vh] min-h-[15rem]"
          )}
        >
          <div className="flex justify-center items-center w-full">
            <RadioGroup
              className="grid grid-cols-2 gap-2 w-full"
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
                        "flex overflow-x-auto flex-row justify-center items-center py-4 px-2 font-semibold text-gray-800 text-ellipsis whitespace-nowrap rounded-md ring-2 ring-black ring-opacity-5 cursor-pointer",
                        // `hover:${cardColors[values.selectedColor]}`,
                        "hover:bg-gradient-to-br hover:from-slate-50 hover:via-slate-200 hover:to-white",
                        checked ? `${cardColors[values.selectedColor]}` : "",
                        checked ? `${values.selectedColor !== "white" && "text-white"}` : ""
                      )}
                      role="button"
                      tabIndex={0}
                      onClick={() => setOpen(false)}
                    >
                      {/* <div className="flex justify-center items-center mr-3 w-10 h-10"> */}
                      {category.icon}
                      {/* </div> */}
                      {category.name}
                    </div>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
        </div>
      </Modal>
    </>
  );
};
