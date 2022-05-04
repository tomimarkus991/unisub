import { RadioGroup } from "@headlessui/react";

import { useField, useFormikContext } from "formik";

import clsx from "clsx";
import { useState } from "react";
import { HiCalendar } from "react-icons/all";

import { billingTypeValues } from "app-constants";
import {
  animations,
  AnimationWrapper,
  InputErrorText,
  Modal,
  ModalHeader,
  RealIconButton,
} from "components";
import { SubscriptionBillingType } from "types";

export const SelectBillingTypeModal = () => {
  const [open, setOpen] = useState(false);

  const [field, { touched, error }] = useField<SubscriptionBillingType>("selectedBillingType");
  const { setFieldValue } = useFormikContext();

  return (
    <>
      <div className="mb-2">
        <label htmlFor="type-input">Type</label>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        maxWidth="xs"
        modalButton={
          <>
            <RealIconButton
              id="currency-input"
              variant="light"
              className="rounded-lg"
              onClick={() => {
                setOpen(true);
              }}
            >
              <div className="flex flex-row justify-center items-center">
                <div className="flex justify-start items-center mr-1 xs:w-8 xs:h-8">
                  <HiCalendar className="w-7 h-7" />
                </div>
                {field.value}
              </div>
            </RealIconButton>
            <InputErrorText touched={touched} error={error} />
          </>
        }
      >
        <ModalHeader setOpen={setOpen} type="back">
          Type
        </ModalHeader>
        <div
          className={clsx(
            "scrollbar-styles",
            "flex overflow-y-auto items-start py-2 px-4 min-h-[10rem] xs:min-w-[20rem]"
          )}
        >
          <div className="flex justify-center items-center w-full">
            <RadioGroup
              className="grid grid-cols-2 gap-2 w-full"
              value={field.value}
              onChange={value => {
                setFieldValue("selectedBillingType", value);
              }}
            >
              {billingTypeValues.map(billingType => (
                <RadioGroup.Option value={billingType} key={billingType}>
                  {({ checked }) => (
                    <AnimationWrapper
                      keyIndex={billingType}
                      variants={animations.makeBiggerAndRotateSlightly}
                      className={clsx(
                        // checked && "border-4 border-transparent border-gradient-br-purple-white",
                        "flex overflow-x-auto flex-row justify-center items-center py-4 px-2 font-semibold text-gray-800 whitespace-nowrap rounded-md cursor-pointer xs:text-lg",
                        "bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200",
                        // `hover:${cardColors[values.selectedColor]}`,
                        "hover:bg-gradient-to-tr hover:from-slate-50 hover:via-slate-200 hover:to-gray-50",
                        checked && "ring-[3px] ring-slate-500 ring-opacity-60"
                      )}
                      role="button"
                      tabIndex={0}
                      onClick={() => setOpen(false)}
                    >
                      <div className="w-[40%]">
                        <HiCalendar className="w-6 h-6 fill-slate-700 hover:fill-slate-800" />
                      </div>
                      <div className="w-[70%]">
                        {billingType}
                        {/* <span
                          className="ml-2 min-w-[6rem] text-lg font-semibold text-left"
                          role="button"
                          tabIndex={0}
                          onClick={() => setOpen(false)}
                        >
                          {billingType}
                        </span> */}
                      </div>
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
