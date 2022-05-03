import { RadioGroup } from "@headlessui/react";

import { useField, useFormikContext } from "formik";

import clsx from "clsx";
import { useState } from "react";

import { categories } from "app-constants";
import {
  animations,
  AnimationWrapper,
  InputErrorText,
  Modal,
  ModalHeader,
  RealIconButton,
} from "components";
import { CategoryCardItem } from "types";

interface Props {
  name: string;
}

export const SelectCategoryModal = ({ name }: Props) => {
  const [open, setOpen] = useState(false);
  const [field, { touched, error }] = useField<CategoryCardItem>(name);
  const { setFieldValue } = useFormikContext();

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
                <div className="flex justify-start items-center mr-1 max-h-[1.5rem] xs:w-8 xs:h-8">
                  {field.value.icon}
                </div>
                {field.value.name}
              </div>
            </RealIconButton>
            <InputErrorText touched={touched} error={error} />
          </>
        }
      >
        <ModalHeader setOpen={setOpen} type="back">
          Category
        </ModalHeader>
        <div
          className={clsx(
            "scrollbar-styles",
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
                    <AnimationWrapper
                      keyIndex={category.name}
                      variants={animations.makeBiggerAndRotateSlightly}
                      className={clsx(
                        "scrollbar-styles",
                        "flex overflow-x-auto flex-row justify-center items-center py-4 px-3 font-semibold text-gray-800 bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 rounded-md cursor-pointer xs:text-lg",
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
                    </AnimationWrapper>
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
