import { RadioGroup } from "@headlessui/react";
import {
  InputErrorText,
  Modal,
  ModalHeader,
  RealIconButton,
  RadioButtonWrapper,
} from "@redlotus/ui";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import { useState } from "react";

import { categories } from "app-constants";
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
            "scrollbar-hide",
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
                    <RadioButtonWrapper checked={checked} index={category.name} setOpen={setOpen}>
                      <div className="w-[40%]">{category.icon}</div>
                      <div className="w-[70%]">{category.name}</div>
                    </RadioButtonWrapper>
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
