import { RadioGroup } from "@headlessui/react";
import { InputErrorText, Modal, ModalHeader, RadioButtonWrapper, RealButton } from "@redlotus/ui";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import { useState } from "react";
import { HiCalendar } from "react-icons/hi";

import { billingTypeValues } from "app-constants";
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
            <RealButton
              id="currency-input"
              variant="light"
              size="icon"
              className="rounded-lg"
              onClick={() => {
                setOpen(true);
              }}
            >
              <div className="flex flex-row items-center justify-center">
                <div className="flex items-center justify-start mr-1 xs:w-8 xs:h-8">
                  <HiCalendar className="w-7 h-7" />
                </div>
                {field.value}
              </div>
            </RealButton>
            <InputErrorText touched={touched} error={error} />
          </>
        }
      >
        <ModalHeader setOpen={setOpen} type="back">
          Type
        </ModalHeader>
        <div
          className={clsx(
            "scrollbar-hide",
            "flex overflow-y-auto items-start py-2 px-4 min-h-[10rem] xs:min-w-[20rem]"
          )}
        >
          <div className="flex items-center justify-center w-full">
            <RadioGroup
              className="grid w-full grid-cols-2 gap-2"
              value={field.value}
              onChange={value => {
                setFieldValue("selectedBillingType", value);
              }}
            >
              {billingTypeValues.map(billingType => (
                <RadioGroup.Option value={billingType} key={billingType}>
                  {({ checked }) => (
                    <RadioButtonWrapper checked={checked} index={billingType} setOpen={setOpen}>
                      <div className="w-[40%]">
                        <HiCalendar className="w-6 h-6 fill-slate-700 hover:fill-slate-800" />
                      </div>
                      <div className="w-[70%]">{billingType}</div>
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
