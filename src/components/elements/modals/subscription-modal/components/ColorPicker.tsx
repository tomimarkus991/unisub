import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";

import { cardColors } from "app-constants";
import { CardColorType } from "types";

interface Props {
  name: string;
}

export const ColorPicker = ({ name }: Props) => {
  const [field, { touched, error }] = useField(name);
  const { setFieldValue } = useFormikContext();

  return (
    <>
      <RadioGroup
        className="flex flex-row flex-wrap mt-10"
        {...field}
        onChange={value => {
          setFieldValue(name, value);
        }}
      >
        {Object.keys(cardColors).map(color => (
          <RadioGroup.Option key={color} value={color}>
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
      {touched && error && <div>{error}</div>}
    </>
  );
};
