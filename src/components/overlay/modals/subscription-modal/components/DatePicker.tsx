import { DesktopDatePicker } from "@mui/lab";
import clsx from "clsx";
import { useField, useFormikContext } from "formik";
import { HiCalendar } from "react-icons/all";

import { InputErrorText } from "components";

interface Props {
  name: string;
  label: string;
}

export const DatePicker = ({ name, label }: Props) => {
  const [field, { touched, error }] = useField<Date>(name);
  const { setFieldValue } = useFormikContext();

  return (
    <div>
      <div className="mb-2">
        <label htmlFor="subscription-start-date-input">
          {label}&nbsp;
          <span className="text-red-500">*</span>
        </label>
      </div>
      <DesktopDatePicker
        value={field.value}
        inputFormat="DD/MM/YYYY"
        onChange={(value: any) => {
          setFieldValue(name, value);
        }}
        renderInput={({ inputRef, inputProps }: any) => (
          <>
            <div className="relative">
              <input
                id="subscription-start-date-input"
                ref={inputRef}
                {...inputProps}
                className={clsx(
                  `text-slate-700 bg-white border-2 border-gray-300 focus:border-slate-500 focus:outline-none caret-gray-400`,
                  "block py-2.5 pl-4 w-11/12 font-semibold rounded-lg xs:py-3 dark:placeholder-gray-400",
                  `${field.value}` === "Invalid date" || `${field.value}` === ""
                    ? " border-red-500 focus:border-red-600 outline-none focus:outline-none focus:ring-1 focus:ring-red-600"
                    : ""
                )}
              />
              <div className="flex absolute inset-y-0 right-7 items-center sm:right-14 xs:right-10 xs2:right-9">
                <HiCalendar className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </>
        )}
      />
      <InputErrorText touched={touched} error={error} />
    </div>
  );
};
