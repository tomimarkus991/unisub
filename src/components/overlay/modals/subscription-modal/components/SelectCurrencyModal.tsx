import { RadioGroup } from "@headlessui/react";
import { InputErrorText, Modal, ModalHeader, RealButton, RadioButtonWrapper } from "@redlotus/ui";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import { useEffect, useState } from "react";

import { currencies } from "app-constants";
import { CurrencyType } from "types";

export const SelectCurrencyModal = () => {
  const [open, setOpen] = useState(false);

  const [field, { touched, error }] = useField<CurrencyType>("billing");
  const { setFieldValue } = useFormikContext();

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
        maxWidth="sm"
        modalButton={
          <>
            <RealButton
              id="currency-input"
              size="icon"
              variant="light"
              className="rounded-lg cursor-not-allowed"
              onClick={() => {
                setOpen(false);
              }}
            >
              <div className="flex flex-row items-center justify-center">
                <div className="flex items-center justify-start mr-2">
                  <img
                    className="w-5 h-5 sm:w-7 sm:h-7"
                    src={`/flags/${activeCurrency.image}`}
                    alt="icon"
                  />
                </div>
                {field.value.name}
              </div>
            </RealButton>
            <InputErrorText touched={touched} error={error} />
          </>
        }
      >
        <ModalHeader setOpen={setOpen} type="back">
          Currency
        </ModalHeader>
        <div
          className={clsx(
            "scrollbar-hide",
            "flex overflow-y-auto items-start py-2 px-4 h-[7vh] min-h-[7rem] xs:min-w-[24rem]"
          )}
        >
          <div className="flex items-center justify-center w-full">
            <RadioGroup
              className="grid w-full grid-cols-2 gap-2"
              value={field.value}
              onChange={value => {
                setFieldValue("billing", value);
              }}
            >
              {currencies.map(currency => (
                <RadioGroup.Option value={currency} key={currency.name}>
                  {({ checked }) => (
                    <RadioButtonWrapper checked={checked} index={currency.name} setOpen={setOpen}>
                      <div className="w-[30%]">
                        <img className="w-8 h-8" src={`/flags/${currency.image}`} alt="icon" />
                      </div>
                      <div className="w-[50%]">{currency.name}</div>
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
