/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { HiCheck, HiPencil, HiTrash, HiX } from "react-icons/hi";

import { SubscriptionModal } from "components";
import { useSub } from "context";
import { Subscription } from "types";

interface Props {
  sub: Subscription;
}

export const LayoutSubscriptionCardPopOver = ({ sub }: Props) => {
  const { active: isSubActive } = sub;
  const { subs, setSubs } = useSub();

  const handleActivate = () => {
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
    setSubs(
      subs.filter(mappedSub => {
        return mappedSub.id !== sub.id;
      })
    );
  };

  return (
    <div className="z-[1330]">
      <SubscriptionModal buttonType="children" subValues={sub} isEditing>
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
  );
};
