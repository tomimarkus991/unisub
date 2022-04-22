import { currencies, scrollbarStyles } from "constants";

import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";

import { InputErrorText, Modal, ModalHeaderGoOneBack, RealButton } from "components";
import { CurrencyType } from "types";

import { SubFormValues } from "..";

interface Props {
  name: string;
}

export const SelectCurrencyModal = ({ name }: Props) => {
  const [open, setOpen] = useState(false);

  const [field, { touched, error }] = useField<CurrencyType>(name);
  const { setFieldValue } = useFormikContext<SubFormValues>();

  const [activeCurrency, setActiveCurrency] = useState<CurrencyType>(
    currencies.find(currency => currency.name === field.value.name) as CurrencyType
  );

  useEffect(() => {
    setActiveCurrency(
      currencies.find(currency => currency.name === field.value.name) as CurrencyType
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value]);

  return (
    <>
      <div className="mb-2">
        <label htmlFor="currency-input">Currency</label>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        modalButton={
          <>
            <RealButton
              id="currency-input"
              variant="light"
              className="py-3 px-4 w-10/12 text-sm font-semibold rounded-lg sm:p-2.5 sm:text-lg xs:text-base"
              onClick={() => {
                setOpen(true);
              }}
            >
              <div className="flex flex-row justify-center items-center">
                {field.value.name}
                <img
                  className="ml-1 w-5 h-5 sm:ml-3 sm:w-7 sm:h-7"
                  src={`/flags/${activeCurrency.image}`}
                  alt="icon"
                />
              </div>
            </RealButton>
            <InputErrorText touched={touched} error={error} />
          </>
        }
      >
        <ModalHeaderGoOneBack setOpen={setOpen}>Currency</ModalHeaderGoOneBack>
        <div className="p-4">
          <div className="flex items-start">
            <div className="mt-0 w-full">
              <RadioGroup
                className="grid grid-cols-2 mt-6"
                value={field.value}
                onChange={value => {
                  setFieldValue(name, value);
                }}
              >
                {currencies.map(currency => (
                  <RadioGroup.Option value={currency} key={currency.name}>
                    <div
                      onClick={() => setOpen(false)}
                      role="button"
                      tabIndex={0}
                      className={clsx(
                        scrollbarStyles,
                        "flex overflow-x-auto flex-row justify-center items-center py-4 mr-3 mb-2 text-sm text-center text-ellipsis whitespace-nowrap rounded-md ring-2 ring-black ring-opacity-5 cursor-pointer"
                      )}
                    >
                      <span
                        className="mr-2 text-lg font-semibold text-center"
                        role="button"
                        tabIndex={0}
                        onClick={() => setOpen(false)}
                      >
                        {currency.name}
                      </span>
                      <img className="w-8 h-8" src={`/flags/${currency.image}`} alt="icon" />
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
