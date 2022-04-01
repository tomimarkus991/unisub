/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { XIcon } from "@heroicons/react/solid";
import { DatePicker as MuiDatePicker } from "@mui/lab";
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
              className="block py-2.5 pl-4 font-semibold text-gray-700 dark:text-white bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-300 focus:border-blue-500 dark:border-gray-600  dark:focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-500 sm:text-sm dark:placeholder-gray-400"
            />

            <div
              className="flex absolute inset-y-0 right-4 items-center cursor-pointer"
              onClick={() => setSubscriptionStartDate(null)}
            >
              <XIcon className="w-5 h-5 text-gray-500" />
            </div>
            <div className="flex absolute inset-y-0 right-10 items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        )}
      />
    </div>
  );
};
