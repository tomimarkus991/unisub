/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Transition, Dialog, RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useState } from "react";

const days: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
  28, 29, 30, 31,
];

export const DatePicker = () => {
  const [selectedDay, setSelectedDay] = useState<number>();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex inset-y-0 justify-center items-center pl-3 text-center cursor-pointer"
      >
        <span className="mr-1 text-lg font-semibold text-center text-gray-700">{selectedDay}</span>
        <svg
          className="w-6 h-6 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
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
                      {" "}
                      <Dialog.Title
                        as="h3"
                        className="mb-3 text-lg font-medium leading-6 text-center text-gray-700 uppercase"
                      >
                        Select Subscription Start Date
                      </Dialog.Title>
                      <RadioGroup
                        className="grid grid-cols-5 mt-6 sm:grid-cols-7"
                        value={selectedDay}
                        onChange={e => {
                          setSelectedDay(e as unknown as number);
                        }}
                      >
                        {days.map(day => (
                          <RadioGroup.Option value={day} key={day}>
                            <div
                              onClick={() => setOpen(false)}
                              className={clsx(
                                "flex overflow-x-auto flex-row justify-center items-center p-2 mr-3 mb-2 text-sm text-center text-ellipsis whitespace-nowrap rounded-md ring-2 ring-black ring-opacity-5 hover:scale-110 cursor-pointer"
                              )}
                            >
                              <span
                                className="text-lg font-semibold text-center text-gray-800"
                                role="button"
                                tabIndex={0}
                                onClick={() => setOpen(false)}
                              >
                                {day}
                              </span>
                            </div>
                          </RadioGroup.Option>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>

    // {/* <input
    //   type="number"
    //   placeholder="Day when subscription started"
    //   maxLength={2}
    //   max={31}
    //   min={1}
    //   value={selectedDate}
    //   defaultValue={selectedDate}
    //   onChange={e => setSelectedDate(e.target.value)}
    //   className="block p-2.5 pl-10 w-full text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 focus:border-blue-500 dark:border-gray-600  dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 select-none sm:text-sm dark:placeholder-gray-400"
    // /> */}
  );
};
