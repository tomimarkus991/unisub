import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

export interface SelectOption {
  id: number;
  name: string;
}

interface Props {
  options: SelectOption[];
  value: SelectOption;
  setValue: React.Dispatch<React.SetStateAction<SelectOption>>;
}

export const SelectField = ({ options, value, setValue }: Props) => {
  const { t } = useTranslation();
  return (
    <Listbox value={value} onChange={setValue}>
      {({ open }) => (
        <div className="relative mt-1">
          <div className="mt-0 mb-2">
            <label htmlFor="select-input">Category</label>
          </div>
          <Listbox.Button
            id="select-input"
            className="relative py-2 pr-10 pl-3 w-full text-left bg-white rounded-lg focus-visible:border-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
        focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 shadow-md cursor-default"
          >
            <span className="block truncate">{t(value.name)}</span>
            <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
              <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-100 ease-in"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options className="overflow-y-scroll absolute z-20 py-1 mt-1 w-full max-h-52 text-base bg-white rounded-md focus:outline-none ring-1 ring-black ring-opacity-5 shadow-lg">
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? "text-amber-900 bg-amber-100" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                      >
                        {t(option.name)}
                      </span>
                      {selected ? (
                        <span className="flex absolute inset-y-0 left-0 items-center pl-3 text-amber-600">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
};
