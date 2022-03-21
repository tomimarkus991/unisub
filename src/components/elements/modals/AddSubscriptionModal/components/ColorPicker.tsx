import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";

import { cardColors, CardColorType } from "..";

interface Props {
  selectedColor: CardColorType;
  setSelectedColor: React.Dispatch<React.SetStateAction<CardColorType>>;
}

export const ColorPicker = ({ selectedColor, setSelectedColor }: Props) => {
  return (
    <RadioGroup className="flex flex-row mt-4" value={selectedColor} onChange={setSelectedColor}>
      {Object.keys(cardColors).map(color => (
        <RadioGroup.Option className="mr-2" value={color} key={color}>
          {({ checked }) => (
            <span
              className={clsx(
                "w-8 h-8 inline-block rounded-full cursor-pointer",
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
