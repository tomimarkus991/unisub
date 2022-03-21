import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

export interface SelectOption {
  id: number;
  name: string;
}

interface Props {
  options: SelectOption[];
}

export const SelectField = ({ options }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState(options[0]);
  const { t } = useTranslation();
  return (
    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
      <div className="relative mt-1">
        <Listbox.Button
          className="mt-4 relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 
        focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
        >
          <span className="block truncate">{t(selectedCategory.name)}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                      {t(option.name)}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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
    </Listbox>
    // <Listbox value={selectedCategory} onChange={setSelectedCategory}>
    //   {({ open }) => (
    //     <>
    //       <Listbox.Button>{selectedCategory.name}</Listbox.Button>
    //       <Transition
    //         show={open}
    //         enter="transition duration-100 ease-out"
    //         enterFrom="transform scale-95 opacity-0"
    //         enterTo="transform scale-100 opacity-100"
    //         leave="transition duration-75 ease-out"
    //         leaveFrom="transform scale-100 opacity-100"
    //         leaveTo="transform scale-95 opacity-0"
    //       >
    //         <Listbox.Options static>
    //           {people.map(option => (
    //             <Listbox.Option key={option.id} value={option}>
    //               {t(option.name)}
    //             </Listbox.Option>
    //           ))}
    //         </Listbox.Options>
    //       </Transition>
    //     </>
    //   )}
    // </Listbox>
  );
};
