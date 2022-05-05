import { AnimatePresence } from "framer-motion";

import clsx from "clsx";
import { createPortal } from "react-dom";
import { HiCheck, HiPencil, HiTrash, HiX } from "react-icons/all";

import { animations, AnimationWrapper, SubscriptionModal } from "components";
import { useSub } from "context";
import { Subscription } from "types";

interface Props {
  sub: Subscription;
  isSubCardPopoverOpen: boolean;
  setIsSubCardPopoverOpen: (isSubCardPopoverOpen: boolean) => void;
}

export const LayoutSubscriptionCardPopOver = ({
  sub,
  isSubCardPopoverOpen,
  setIsSubCardPopoverOpen,
}: Props) => {
  const { active: isSubActive } = sub;
  const { subs, setSubs } = useSub();

  const handleActivate = () => {
    setIsSubCardPopoverOpen(false);
    setSubs(
      subs.map(mappedSub => {
        if (mappedSub.id === sub.id) {
          mappedSub.active = !isSubActive;
        }
        return mappedSub;
      })
    );
  };

  const handleDelete = () => {
    setIsSubCardPopoverOpen(false);
    setSubs(
      subs.filter(mappedSub => {
        return mappedSub.id !== sub.id;
      })
    );
  };

  return (
    <>
      {isSubCardPopoverOpen &&
        createPortal(
          <div
            role="button"
            tabIndex={0}
            onClick={() => setIsSubCardPopoverOpen(false)}
            className={clsx(
              "absolute inset-0 w-screen h-screen opacity-100 cursor-default",
              "z-[998]"
            )}
          />,
          document.body
        )}
      <AnimatePresence>
        {isSubCardPopoverOpen && (
          <AnimationWrapper
            keyIndex="layout-sub-popover"
            variants={animations.popOverEffect}
            animateOnAllScreens
          >
            <div
              className={clsx(
                "absolute min-w-[12rem] max-w-[12rem] sm:px-0",
                "left-1/2 z-[999] -translate-x-1/4 -translate-y-20"
              )}
            >
              <div className="flex overflow-hidden relative flex-col p-3 text-2xl font-bold bg-white rounded-lg shadow-lg">
                <SubscriptionModal
                  buttonType="children"
                  subValues={sub}
                  isEditing
                  setIsSubCardPopoverOpen={setIsSubCardPopoverOpen}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    className="flex items-center p-2 w-full text-base font-medium hover:bg-gray-100 rounded-md"
                  >
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
          </AnimationWrapper>
        )}
      </AnimatePresence>
    </>
  );
};
