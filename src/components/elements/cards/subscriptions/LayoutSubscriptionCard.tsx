import clsx from "clsx";
import moment from "moment";
import { useEffect, useState } from "react";
import { HiCheck, HiPencil, HiTrash, HiX } from "react-icons/all";

import { cardColors } from "app-constants";
import { SubscriptionModal } from "components";
import { Subscription } from "types";
import { createSubPrice } from "utils";

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

  const [isSubCardPopoverOpen, setIsSubCardPopoverOpen] = useState(false);

  const textColor = cardColor === "white" ? "text-gray-800" : "text-white";
  const dateNow = moment();
  const subStartDate = moment(startDate);
  const price = createSubPrice(sub);

  const daysUntilResub = subStartDate.diff(dateNow, "days") + 1;

  const [resubText, setResubText] = useState(`Resub in ${daysUntilResub} days`);

  const handleActivate = () => {
    setIsSubCardPopoverOpen(false);
  };

  const handleDelete = () => {
    setIsSubCardPopoverOpen(false);
  };

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
    <div className="relative w-full cursor-pointer xs:min-w-[20rem] xs:max-w-xs">
      <div
        onClick={() => setIsSubCardPopoverOpen(value => !value)}
        role="button"
        tabIndex={0}
        className="w-full"
      >
        <div
          className={clsx(
            "flex overflow-hidden relative flex-row items-center py-4 px-6 mb-2 w-full h-24 rounded-full",
            cardColors[cardColor]
          )}
        >
          {/* <CardAnimations cardColor={cardColor} durationModifier={3} /> */}
          <div className="flex z-10 flex-col ml-2 w-7/12">
            <div
              className={clsx(
                "scrollbar-styles",
                "flex overflow-x-auto flex-row justify-start mb-2 whitespace-nowrap"
              )}
            >
              <p className={clsx("text-xl font-semibold", textColor)}>{title}</p>
            </div>
            <div className="flex flex-row justify-start">
              <p className={clsx("", textColor)}>{category}</p>
            </div>
          </div>
          <div className="flex z-10 flex-col ml-4 w-5/12 text-center">
            <div className={clsx("mb-1")}>
              <p className={clsx("", textColor)}>{price}</p>
            </div>
            <div className="flex flex-row justify-center">
              <p className={clsx("", textColor)}>{resubText}</p>
            </div>
          </div>
        </div>
      </div>
      {isSubCardPopoverOpen && (
        <div className="absolute left-1/2 z-40 min-w-[12rem] max-w-[12rem] transform -translate-x-1/4 -translate-y-20 select-none sm:px-0">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div className="flex relative flex-col p-3 text-2xl font-bold bg-white">
              <SubscriptionModal
                buttonType="children"
                subValues={sub}
                isEditing
                setIsSubCardPopoverOpen={setIsSubCardPopoverOpen}
              >
                <div className="flex items-center p-2 w-full text-base font-medium hover:bg-gray-100 rounded-md">
                  <HiPencil className="mr-2 w-5 h-5 fill-slate-700 hover:fill-slate-800" />
                  <p>Edit</p>
                </div>
              </SubscriptionModal>
              <button
                onClick={handleActivate}
                className="flex items-center p-2 w-full text-base font-medium hover:bg-gray-100 rounded-md"
              >
                {isSubActive ? (
                  <HiX className="mr-2 w-5 h-5 fill-slate-700 hover:fill-slate-800" />
                ) : (
                  <HiCheck className="mr-2 w-5 h-5 fill-slate-700 hover:fill-slate-800" />
                )}
                <p>{isSubActive ? "Deactivate" : "Activate"}</p>
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center p-2 w-full text-base font-medium hover:bg-gray-100 rounded-md"
              >
                <HiTrash className="mr-2 w-5 h-5 fill-red-500 hover:fill-red-600" />
                <p>Delete</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
