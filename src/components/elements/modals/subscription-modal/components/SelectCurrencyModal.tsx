/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dialog, RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { currencies } from "app-constants";
import { RealButton, Modal } from "components/elements";
import { BillingType, CurrencyCardItem, CurrencyModalType } from "types";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<BillingType>>;
}

export const SelectCurrencyModal = ({ value, setValue }: Props) => {
  const [open, setOpen] = useState(false);
  const [activeCurrency, setActiveCurrency] = useState<CurrencyModalType>(
    currencies.find(currency => currency.name === value) as CurrencyModalType
  );

  useEffect(() => {
    setActiveCurrency(currencies.find(currency => currency.name === value) as CurrencyModalType);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <div className="mb-2">
        <label htmlFor="currency-input">Currency</label>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        modalButton={
          <RealButton
            id="currency-input"
            variant="light"
            className="py-3 px-4 w-10/12 text-sm font-semibold rounded-lg sm:p-2.5 sm:text-lg xs:text-base"
            onClick={() => {
              setOpen(true);
            }}
          >
            <div className="flex flex-row justify-center items-center">
              {value}
              <img
                className="ml-1 w-5 h-5 sm:ml-3 sm:w-7 sm:h-7"
                src={`${process.env.PUBLIC_URL}/assets/flags/${activeCurrency.icon}`}
                alt="icon"
              />
            </div>
          </RealButton>
        }
      >
        <div className="p-6 px-4 pt-5 pb-4">
          <div className="flex items-start">
            <div className="mt-0 w-full">
              <Dialog.Title
                as="h3"
                className="mb-3 text-lg font-medium leading-6 text-center text-gray-700 uppercase"
              >
                Select currency
              </Dialog.Title>
              <RadioGroup
                className="grid grid-cols-2 mt-6"
                value={value}
                onChange={e => {
                  const { name, currencyIcon } = e as unknown as CurrencyCardItem;
                  setValue((prevState: BillingType) => ({
                    ...prevState,
                    currency: name,
                    currencyIcon,
                  }));
                }}
              >
                {currencies.map(currency => (
                  <RadioGroup.Option value={currency} key={currency.name}>
                    <div
                      onClick={() => setOpen(false)}
                      className={clsx(
                        "flex overflow-x-auto flex-row justify-center items-center py-4 mr-3 mb-2 text-sm text-center text-ellipsis whitespace-nowrap rounded-md ring-2 ring-black ring-opacity-5 cursor-pointer scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-gray-100 active:scrollbar-thumb-slate-600"
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
                      <img
                        className="w-8 h-8"
                        src={`${process.env.PUBLIC_URL}/assets/flags/${currency.icon}`}
                        alt="icon"
                      />
                    </div>
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse py-3 px-6 bg-gray-50 rounded-b-xl">
          <p>bottom</p>
        </div>
      </Modal>
    </>
  );
};
