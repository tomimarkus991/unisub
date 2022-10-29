import { ModalSubTitle, FormikInput } from "@redlotus/ui";
import clsx from "clsx";

import { ColorPicker, SelectCategoryModal } from "components";

export const GeneralSection = () => {
  return (
    <>
      <ModalSubTitle>General</ModalSubTitle>
      <div className="mt-4">
        <ColorPicker name="selectedColor" />
        <div className="flex flex-row">
          <div className="w-6/12 sm:w-full">
            <FormikInput
              name="title"
              type="text"
              placeholder="Sub name"
              className={clsx("px-3 w-11/12")}
              label={
                <>
                  Name <span className="text-red-500">*</span>
                </>
              }
            />
          </div>
          <div className="w-6/12 sm:w-full">
            <SelectCategoryModal name="selectedCategory" />
          </div>
        </div>
      </div>
    </>
  );
};
