import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

import { cardColors, CardColorType } from "..";

interface Props {
  selectedColor: CardColorType;
  setSelectedColor: React.Dispatch<React.SetStateAction<CardColorType>>;
}

export const ColorPicker = ({ selectedColor, setSelectedColor }: Props) => {
  return (
    <RadioGroup
      className="flex flex-row mt-10 flex-wrap"
      value={selectedColor}
      onChange={setSelectedColor}
    >
      {Object.keys(cardColors).map(color => (
        <RadioGroup.Option value={color} key={color}>
          {({ checked }) => (
            <span
              className={clsx(
                "mr-3 mb-2 w-8 h-8 inline-block rounded-full cursor-pointer ring-1 ring-black ring-opacity-20",
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
