import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { currencies, scrollbarStyles } from "app-constants";
import { InputErrorText, Modal, ModalHeaderGoOneBack, RealIconButton } from "components";
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
        maxWidth="sm"
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
                <div className="flex justify-start items-center mr-2">
                  <img
                    className="w-5 h-5 sm:w-7 sm:h-7"
                    src={`/flags/${activeCurrency.image}`}
                    alt="icon"
                  />
                </div>
                {field.value.name}
              </div>
            </RealIconButton>
            <InputErrorText touched={touched} error={error} />
          </>
        }
      >
        <ModalHeaderGoOneBack setOpen={setOpen}>Currency</ModalHeaderGoOneBack>
        <div
          className={clsx(
            scrollbarStyles,
            "flex overflow-y-auto items-start py-2 px-4 h-[7vh] min-h-[7rem] xs:min-w-[27rem]"
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
              {currencies.map(currency => (
                <RadioGroup.Option value={currency} key={currency.name}>
                  {({ checked }) => (
                    <motion.div
                      whileHover={{
                        rotate: [0, -2],
                        scale: [1, 1.1],
                        transition: { duration: 0.1 },
                      }}
                      className={clsx(
                        scrollbarStyles,
                        "flex overflow-x-auto flex-row justify-center items-center py-4 px-2 font-semibold text-gray-800 text-ellipsis whitespace-nowrap bg-gradient-to-br from-slate-100 via-slate-50 to-slate-200 rounded-md cursor-pointer xs:text-lg",
                        // `hover:${cardColors[values.selectedColor]}`,
                        "hover:bg-gradient-to-tr hover:from-slate-50 hover:via-slate-200 hover:to-gray-50",
                        checked && "ring-[3px] ring-slate-500 ring-opacity-60"
                      )}
                      role="button"
                      tabIndex={0}
                      onClick={() => setOpen(false)}
                    >
                      <div className="w-[30%]">
                        <img className="w-8 h-8" src={`/flags/${currency.image}`} alt="icon" />
                      </div>
                      <div className="w-[50%]">{currency.name}</div>
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
