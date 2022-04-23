import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";

import { categories, scrollbarStyles } from "app-constants";
import {
  InputErrorText,
  Modal,
  ModalHeaderGoOneBack,
  RealIconButton,
  SubFormValues,
} from "components";
import { CategoryCardItem } from "types";

interface Props {
  name: string;
}

export const SelectCategoryModal = ({ name }: Props) => {
  const [open, setOpen] = useState(false);
  const [field, { touched, error }] = useField<CategoryCardItem>(name);
  const { setFieldValue, values } = useFormikContext<SubFormValues>();
  console.log("values.selectedColor", values.selectedColor);

  return (
    <>
      <div className="mb-2">
        <label htmlFor="category-input">Category</label>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        maxWidth="md"
        modalButton={
          <>
            <RealIconButton
              id="category-input"
              variant="light"
              className="rounded-lg"
              onClick={() => {
                setOpen(true);
              }}
            >
              <div className="flex flex-row justify-center items-center">
                <div className="flex justify-start items-center mr-1 xs:w-8 xs:h-8">
                  {field.value.icon}
                </div>
                {field.value.name}
              </div>
            </RealIconButton>
            <InputErrorText touched={touched} error={error} />
          </>
        }
      >
        <ModalHeaderGoOneBack setOpen={setOpen}>Category</ModalHeaderGoOneBack>
        <div
          className={clsx(
            scrollbarStyles,
            "flex overflow-y-auto items-start py-2 px-4 h-[36vh] min-h-[15rem] xs:min-w-[27rem]"
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
                    <motion.div
                      whileHover={{
                        rotate: [0, -2],
                        scale: [1, 1.1],
                        transition: { duration: 0.1 },
                      }}
                      className={clsx(
                        scrollbarStyles,
                        "flex overflow-x-auto flex-row justify-center items-center py-4 px-3 font-semibold text-gray-800 text-ellipsis whitespace-nowrap bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 rounded-md cursor-pointer xs:text-lg",
                        // `hover:${cardColors[values.selectedColor]}`,
                        "hover:bg-gradient-to-tr hover:from-slate-50 hover:via-slate-200 hover:to-gray-50",
                        checked && "ring-[3px] ring-slate-500 ring-opacity-60"
                      )}
                      role="button"
                      tabIndex={0}
                      onClick={() => setOpen(false)}
                    >
                      <div className="w-[40%]">{category.icon}</div>
                      <div className="w-[70%]">{category.name}</div>
                    </motion.div>
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
