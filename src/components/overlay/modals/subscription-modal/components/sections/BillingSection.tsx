import { FormikInput, ModalSubTitle } from "@redlotus/ui";
import clsx from "clsx";

import { SelectBillingTypeModal, SelectCurrencyModal, DatePicker } from "components";
import { CurrencyIconType } from "types";

interface Props {
  currencyIcon: CurrencyIconType;
}

export const BillingSection = ({ currencyIcon }: Props) => {
  return (
    <>
      <ModalSubTitle>Billing</ModalSubTitle>
      <div className="mt-4">
        <div className="flex flex-row">
          <div className="w-6/12">
            <FormikInput
              name="cost"
              inputPrefix={currencyIcon}
              type="number"
              placeholder="0"
              className={clsx("px-3 w-10/12")}
              label={
                <>
                  Cost <span className="text-red-500">*</span>
                </>
              }
            />
          </div>
          <div className="w-6/12">
            <SelectBillingTypeModal />
          </div>
        </div>

        <div className="flex flex-row mt-3">
          <div className="w-8/12 2xs:w-7/12">
            <DatePicker name="nextPaymentDate" label="Next payment date" />
          </div>
          <div className="w-4/12 2xs:w-5/12">
            <SelectCurrencyModal />
          </div>
        </div>
      </div>
    </>
  );
};
