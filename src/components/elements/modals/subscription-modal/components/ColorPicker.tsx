import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

import { cardColors } from "app-constants";
import { CardColorType } from "types";

interface Props {
  selectedColor: CardColorType;
  setSelectedColor: React.Dispatch<React.SetStateAction<CardColorType>>;
}

export const ColorPicker = ({ selectedColor, setSelectedColor }: Props) => {
  return (
    <RadioGroup
      className="flex flex-row flex-wrap mt-10"
      value={selectedColor}
      onChange={setSelectedColor}
    >
      {Object.keys(cardColors).map(color => (
        <RadioGroup.Option value={color} key={color}>
          {({ checked }) => (
            <span
              className={clsx(
                "inline-block mr-3 mb-2 w-8 h-8 rounded-full ring-1 ring-black ring-opacity-20 cursor-pointer",
                cardColors[color as CardColorType],
                checked ? "scale-125" : ""
              )}
            />
          )}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};
