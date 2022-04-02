/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { CalendarIcon, XIcon } from "@heroicons/react/solid";
import { DatePicker as MuiDatePicker } from "@mui/lab";
interface Props {
  subscriptionStartDate: Date | null;
  setSubscriptionStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

export const DatePicker = ({ subscriptionStartDate, setSubscriptionStartDate }: Props) => {
  console.log("sub start date 1234", subscriptionStartDate);

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
              className="block py-2.5 pl-4 w-11/12 font-semibold text-gray-700 dark:text-white dark:bg-gray-700 rounded-lg border border-gray-300 focus:border-blue-500 dark:border-gray-600 dark:focus:border-blue-500  focus:ring-blue-500 dark:focus:ring-blue-500 xs:py-3 dark:placeholder-gray-400"
            />

            <div
              className="flex absolute inset-y-0 right-6 items-center cursor-pointer xs:right-8 xs2:right-10"
              onClick={() => setSubscriptionStartDate(null)}
            >
              <XIcon className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex absolute inset-y-0 right-12 items-center pointer-events-none xs:right-14 xs2:right-16">
              <CalendarIcon className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        )}
      />
    </div>
  );
};
