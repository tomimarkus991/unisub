import { useField, useFormikContext } from "formik";

import { DesktopDatePicker } from "@mui/lab";
import clsx from "clsx";
import { HiCalendar } from "react-icons/all";

import { InputErrorText } from "components";

import { SubFormValues } from "..";

interface Props {
  name: string;
}

export const DatePicker = ({ name }: Props) => {
  const [field, { touched, error }] = useField<Date>(name);
  const { setFieldValue } = useFormikContext<SubFormValues>();

  return (
    <div>
      <div className="mb-2">
        <label htmlFor="subscription-start-date-input">
          Sub start date <span className="text-red-500">*</span>
        </label>
      </div>
      <DesktopDatePicker
        value={field.value}
        inputFormat="DD/MM/YYYY"
        onChange={value => {
          setFieldValue(name, value);
        }}
        renderInput={({ inputRef, inputProps }) => (
          <>
            <div className="relative">
              <input
                id="subscription-start-date-input"
                ref={inputRef}
                {...inputProps}
                className={clsx(
                  "block py-2.5 pl-4 w-11/12 font-semibold text-gray-700 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 xs:py-3 dark:placeholder-gray-400",
                  `${field.value}` === "Invalid date" || `${field.value}` === ""
                    ? " border-red-500 focus:border-red-600 outline-none focus:outline-none focus:ring-1 focus:ring-red-600"
                    : ""
                )}
              />
              <div className="flex absolute inset-y-0 right-7 items-center sm:right-14 xs:right-10 xs2:right-12">
                <HiCalendar className="w-5 h-5 text-gray-500" />
              </div>
            </div>
            {/* <p className="mt-1 ml-2 text-xs font-thin">{inputProps?.placeholder}</p> */}
          </>
        )}
      />
      <InputErrorText touched={touched} error={error} />
    </div>
  );
};
