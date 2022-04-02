/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { CalendarIcon } from "@heroicons/react/solid";
import { DatePicker as MuiDatePicker } from "@mui/lab";
import clsx from "clsx";
interface Props {
  subscriptionStartDate: Date | null;
  setSubscriptionStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

export const DatePicker = ({ subscriptionStartDate, setSubscriptionStartDate }: Props) => {
  return (
    <div>
      <div className="mb-2">
        <label htmlFor="subscription-start-date-input">Sub start date</label>
      </div>
      <MuiDatePicker
        value={subscriptionStartDate}
        inputFormat="DD/MM/YYYY"
        onChange={subscriptionStartDate => {
          setSubscriptionStartDate(subscriptionStartDate);
        }}
        renderInput={({ inputRef, inputProps }) => (
          <div className="relative">
            <input
              id="subscription-start-date-input"
              ref={inputRef}
              {...inputProps}
              className={clsx(
                "block py-2.5 pl-4 w-11/12 font-semibold text-gray-700 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500 xs:py-3 dark:placeholder-gray-400",

                subscriptionStartDate?.toString() === "Invalid date"
                  ? " focus:border-red-600 outline-none focus:outline-none focus:ring-1 focus:ring-red-600"
                  : ""
              )}
            />
            <div className="flex absolute inset-y-0 right-7 items-center pointer-events-none sm:right-14 xs:right-10 xs2:right-12">
              <CalendarIcon className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        )}
      />
    </div>
  );
};
