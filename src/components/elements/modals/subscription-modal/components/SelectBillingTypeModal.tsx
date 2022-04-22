import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import { useState } from "react";
import { HiCalendar } from "react-icons/all";

import { billingTypeValues, scrollbarStyles } from "app-constants";
import { InputErrorText, Modal, ModalHeaderGoOneBack, RealButton } from "components";
import { SubscriptionBillingType } from "types";

import { SubFormValues } from "..";

interface Props {
  name: string;
}

export const SelectBillingTypeModal = ({ name }: Props) => {
  const [open, setOpen] = useState(false);

  const [field, { touched, error }] = useField<SubscriptionBillingType>(name);
  const { setFieldValue } = useFormikContext<SubFormValues>();

  return (
    <>
      <div className="mb-2">
        <label htmlFor="type-input">Type</label>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        size="xs"
        modalButton={
          <>
            <RealButton
              id="currency-input"
              variant="light"
              className="py-3 px-4 w-10/12 font-semibold rounded-lg sm:p-2.5 sm:text-lg xs:text-base text-md"
              onClick={() => {
                setOpen(true);
              }}
            >
              <div className="flex flex-row justify-center items-center">{field.value}</div>
            </RealButton>
            <InputErrorText touched={touched} error={error} />
          </>
        }
      >
        <ModalHeaderGoOneBack setOpen={setOpen}>Type</ModalHeaderGoOneBack>
        <div className="px-4 pt-5 pb-4">
          <div className="flex items-start">
            <div className=" w-full">
              <RadioGroup
                className="grid grid-cols-1"
                value={field.value}
                onChange={value => {
                  setFieldValue(name, value);
                }}
              >
                {billingTypeValues.map(billingType => (
                  <RadioGroup.Option value={billingType} key={billingType}>
                    <div
                      onClick={() => setOpen(false)}
                      role="button"
                      tabIndex={0}
                      className={clsx(
                        scrollbarStyles,
                        "flex overflow-x-auto flex-row justify-evenly items-center py-4 mr-3 mb-2 text-sm text-center text-ellipsis whitespace-nowrap rounded-md ring-2 ring-black ring-opacity-5 cursor-pointer"
                      )}
                    >
                      <HiCalendar className="w-8 min-w-[5rem] h-8 fill-slate-700 hover:fill-slate-800" />
                      <span
                        className="ml-2 min-w-[6rem] text-lg font-semibold text-left"
                        role="button"
                        tabIndex={0}
                        onClick={() => setOpen(false)}
                      >
                        {billingType}
                      </span>
                    </div>
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
