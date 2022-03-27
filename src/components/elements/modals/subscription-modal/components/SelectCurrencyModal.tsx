/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useEffect, useState } from "react";

import { currencies } from "app-constants";
import { RealButton } from "components/elements";
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
      <RealButton
        id="currency-input"
        variant="light"
        className="py-3 px-4 w-10/12 text-sm rounded-lg sm:p-2 sm:text-lg sm:font-semibold"
        onClick={() => {
          setOpen(true);
        }}
      >
        <div className="flex flex-row justify-center items-center">
          {value}
          <img
            className="ml-1 w-5 h-5 sm:ml-3 sm:w-7 sm:h-7"
            src={`${process.env.PUBLIC_URL}/assets/${activeCurrency.icon}`}
            alt="icon"
          />
        </div>
      </RealButton>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="overflow-y-auto fixed inset-0 z-10" onClose={setOpen}>
          <div className="flex justify-center items-center p-0 px-4 pt-4 pb-20 min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <div className="inline-block my-8 w-full max-w-xl align-bottom bg-white rounded-xl shadow-xl transition-all transform">
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
                          const { name } = e as unknown as CurrencyCardItem;
                          setValue((prevState: BillingType) => ({
                            ...prevState,
                            currency: name,
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
                                className="mr-2 text-lg font-semibold text-center text-gray-800"
                                role="button"
                                tabIndex={0}
                                onClick={() => setOpen(false)}
                              >
                                {currency.name}
                              </span>
                              <img
                                className="w-8 h-8"
                                src={`${process.env.PUBLIC_URL}/assets/${currency.icon}`}
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
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
