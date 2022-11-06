/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Popover } from "@redlotus/ui";
import { useState } from "react";
import { HiCheck, HiPencil, HiTrash, HiX } from "react-icons/all";

import { SubscriptionModal } from "components";
import { useSub } from "context";
import { Subscription } from "types";

interface Props {
  sub: Subscription;
  isPopoverOpen: boolean;
  setIsPopoverOpen: (isPopoverOpen: boolean) => void;
}

export const LayoutSubscriptionCardPopOver = ({ sub }: Props) => {
  const { active: isSubActive } = sub;
  const { subs, setSubs } = useSub();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleActivate = () => {
    setIsPopoverOpen(false);
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
    setIsPopoverOpen(false);
    setSubs(
      subs.filter(mappedSub => {
        return mappedSub.id !== sub.id;
      })
    );
  };

  return (
    <Popover animKey={sub.id} isPopoverOpen={isPopoverOpen} setIsPopoverOpen={setIsPopoverOpen}>
      <SubscriptionModal
        buttonType="children"
        subValues={sub}
        isEditing
        // setIsSubCardPopoverOpen={setIsSubCardPopoverOpen}
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
    </Popover>
  );
};
