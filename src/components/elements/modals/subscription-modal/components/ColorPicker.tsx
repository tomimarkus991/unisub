import { RadioGroup } from "@headlessui/react";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import { motion } from "framer-motion";

import { cardColors } from "app-constants";
import { InputErrorText } from "components/elements";
import { CardColorType } from "types";

import { SubFormValues } from "..";

interface Props {
  name: string;
}

export const ColorPicker = ({ name }: Props) => {
  const [field, { touched, error }] = useField(name);
  const { setFieldValue } = useFormikContext<SubFormValues>();

  return (
    <>
      <RadioGroup
        className="flex flex-row flex-wrap mt-10"
        value={field.value}
        onChange={value => {
          setFieldValue(name, value);
        }}
      >
        {Object.keys(cardColors).map(color => (
          <RadioGroup.Option key={color} value={color}>
            {({ checked }) => (
              <motion.span
                whileHover={{
                  scale: [1, 1.25, 1.25],
                  rotate: [0, 0, 270],
                  borderRadius: ["50%", "30%", "50%"],
                }}
                whileTap={{ scale: 0.8 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  times: [0.1, 0.2, 0.5],
                }}
                animate={checked ? { scale: 1.25 } : { scale: 1 }}
                className={clsx(
                  "inline-block mr-3 mb-2 w-8 h-8 rounded-full ring-1 ring-black ring-opacity-20 cursor-pointer",
                  cardColors[color as CardColorType]
                )}
              />
            )}
          </RadioGroup.Option>
        ))}
      </RadioGroup>
      <InputErrorText touched={touched} error={error} />
    </>
  );
};
