import { RadioGroup } from "@headlessui/react";

import clsx from "clsx";
import { HiMenu, HiViewGrid } from "react-icons/all";

import { useSubView } from "context";

export const ToggleViewButton = () => {
  const { subView, setSubView } = useSubView();
  return (
    <RadioGroup value={subView} onChange={setSubView} className="flex flex-row">
      <RadioGroup.Option className="cursor-pointer" value="grid">
        {({ checked }) => (
          <HiViewGrid
            className={clsx(
              "w-9 h-9 rounded-l-xl fill-gray-700",
              "border-4 border-transparent border-solid outline-none shadow-lg focus:border-gradient-br-purple-white",
              checked && "border-gradient-br-purple-white"
            )}
          />
        )}
      </RadioGroup.Option>
      <RadioGroup.Option className="cursor-pointer" value="table">
        {({ checked }) => (
          <HiMenu
            className={clsx(
              "w-9 h-9 rounded-r-xl fill-gray-700",
              "border-4 border-transparent border-solid outline-none shadow-lg focus:border-gradient-br-purple-white",
              checked && "border-gradient-br-purple-white"
            )}
          />
        )}
      </RadioGroup.Option>
    </RadioGroup>
  );
};
