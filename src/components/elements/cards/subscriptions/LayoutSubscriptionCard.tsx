import { Menu, Transition } from "@headlessui/react";
import { CheckIcon, PencilIcon, TrashIcon, XIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import moment from "moment";
import { Fragment, useEffect, useState } from "react";

import { cardColors, scrollbarStyles } from "app-constants";
import { CardAnimations } from "components";
import { Subscription } from "types";
import { createSubPrice } from "utils";

import { SubscriptionModal } from "../../modals";

interface Props {
  sub: Subscription;
}

// const ModalButton = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <button className="flex items-center p-2 w-full text-base font-medium hover:bg-gray-100 rounded-md">
//       {children}
//     </button>
//   );
// };

export const LayoutSubscriptionCard = ({ sub }: Props) => {
  const { title, color: cardColor, startDate, category, active: isSubActive } = sub;
  const textColor = cardColor === "white" ? "text-gray-800" : "text-white";
  const dateNow = moment();
  const subStartDate = moment(startDate);
  const price = createSubPrice(sub);

  const daysUntilResub = subStartDate.diff(dateNow, "days") + 1;

  const [resubText, setResubText] = useState(`Resub in ${daysUntilResub} days`);

  useEffect(() => {
    if (daysUntilResub === 0) {
      setResubText("Resub today");
    } else if (daysUntilResub === 1) {
      setResubText("Resub tomorrow");
    } else if (daysUntilResub > 1) {
      setResubText(`Resub in ${daysUntilResub} days`);
    } else if (daysUntilResub < 0) {
      setResubText("Expired");
    }
  }, [daysUntilResub]);

  return (
    <Menu as={"div"} className="relative w-full">
      <Menu.Button className="w-full">
        <div
          className={clsx(
            "flex overflow-hidden relative flex-row items-center py-4 px-6 mb-2 w-full h-24 rounded-full cursor-pointer xs:px-8",
            cardColors[cardColor]
          )}
        >
          <CardAnimations cardColor={cardColor} durationModifier={3} />
          <div className="flex z-10 flex-col ml-2 w-7/12 sm:ml-12">
            <div
              className={clsx(
                scrollbarStyles,
                "overflow-x-auto mb-2 text-ellipsis whitespace-nowrap sm:mb-4"
              )}
            >
              <p className={clsx("text-xl font-semibold xs:text-2xl", textColor)}>{title}</p>
            </div>
            <div className="flex flex-row justify-start">
              <div>
                <p className={clsx("xs:text-lg", textColor)}>{category}</p>
              </div>
            </div>
          </div>
          <div className="flex z-10 flex-col ml-4 w-5/12 text-center sm:mr-12">
            <div className={clsx("mb-1")}>
              <p className={clsx("xs:text-lg", textColor)}>{price}</p>
            </div>
            <div className="flex flex-row justify-start">
              <div>
                <p className={clsx("xs:text-lg", textColor)}>{resubText}</p>
              </div>
            </div>
          </div>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-[70%] right-[10%] z-40 w-40 bg-white rounded-md focus:outline-none ring-1 ring-black ring-opacity-5">
          <SubscriptionModal buttonType="children" subValues={sub}>
            <button className="flex items-center p-2 w-full text-base font-medium hover:bg-gray-100 rounded-md">
              <PencilIcon className="mr-2 w-5 h-5 fill-slate-700 hover:fill-slate-800" />
              <p>Edit</p>
            </button>
          </SubscriptionModal>
          <Menu.Item>
            <button className="flex items-center p-2 w-full text-base font-medium hover:bg-gray-100 rounded-md">
              {isSubActive ? (
                <XIcon className="mr-2 w-5 h-5 fill-slate-700 hover:fill-slate-800" />
              ) : (
                <CheckIcon className="mr-2 w-5 h-5 fill-slate-700 hover:fill-slate-800" />
              )}
              <p>{isSubActive ? "Deactivate" : "Activate"}</p>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button className="flex items-center p-2 w-full text-base font-medium hover:bg-gray-100 rounded-md">
              <TrashIcon className="mr-2 w-5 h-5 fill-red-500 hover:fill-red-600" />
              <p>Delete</p>
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};