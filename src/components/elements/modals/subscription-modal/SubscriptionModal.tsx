import { Dialog } from "@headlessui/react";
import { ArrowLeftIcon, PlusCircleIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { Form, Formik } from "formik";
import moment from "moment";
import { useState } from "react";

import {
  subscriptionTypeAsSelectValues,
  categories,
  billingTypes,
  mapSubTypeToMomentType,
  SubModalYupSchema,
  currencies,
  scrollbarStyles,
} from "app-constants";
import {
  RealButton,
  Input,
  Button,
  Modal,
  SelectField,
  ScaleAndRotationAnim1,
  SubscriptionCard,
  Rotate360Anim,
} from "components/elements";
import { useSub } from "context";
import {
  CardColorType,
  CategoryCardItem,
  Subscription,
  SelectOption,
  SubscriptionBillingType,
  CurrencyType,
} from "types";

import { ColorPicker, DatePicker, SelectCategoryModal, SelectCurrencyModal } from ".";

export interface SubFormValues {
  selectedColor: CardColorType;
  title: string;
  selectedCategory: CategoryCardItem;
  billing: CurrencyType;
  cost: string;
  selectedBillingType: SelectOption<SubscriptionBillingType>;
  subscriptionStartDate: Date | null;
}

interface Props {
  isIcon?: boolean;
  buttonTitle?: string;
  setPreviousModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SubscriptionModal = ({
  isIcon = true,
  buttonTitle = "Add subscription",
  setPreviousModalOpen,
}: Props) => {
  const [subModalOpen, setSubModalOpen] = useState(false);

  const initialValues: SubFormValues = {
    selectedColor: "white",
    title: "",
    selectedCategory: categories[0],
    cost: "",
    billing: {
      currencyIcon: "€",
      name: "EUR",
      image: "european-union.svg",
    },
    selectedBillingType: subscriptionTypeAsSelectValues[0],
    subscriptionStartDate: new Date(),
  };

  const { setSubs } = useSub();
  return (
    <>
      <Modal
        open={subModalOpen}
        setOpen={setSubModalOpen}
        modalButton={
          <>
            {isIcon ? (
              <ScaleAndRotationAnim1>
                <PlusCircleIcon
                  className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800"
                  onClick={() => {
                    setSubModalOpen(true);
                  }}
                />
              </ScaleAndRotationAnim1>
            ) : (
              <RealButton
                onClick={() => {
                  setSubModalOpen(true);
                }}
              >
                {buttonTitle}
              </RealButton>
            )}
          </>
        }
      >
        <Formik
          initialValues={initialValues}
          validationSchema={SubModalYupSchema}
          validateOnMount
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);

            const {
              billing,
              selectedBillingType,
              selectedCategory,
              selectedColor,
              subscriptionStartDate,
              title,
              cost,
            } = values;

            const subscription: Subscription = {
              id: "-1",
              title,
              color: selectedColor,
              category: selectedCategory.name,
              startDate: moment(subscriptionStartDate).unix(),
              currency: billing.name,
              cost: parseInt(cost),
              billingType: selectedBillingType.name,
              active: true,
              nextPaymentDate: moment(subscriptionStartDate)
                .add(1, mapSubTypeToMomentType(selectedBillingType.name))
                .unix(),
            };

            setSubs(oldSubs => [...oldSubs, subscription]);
            if (setPreviousModalOpen) {
              setPreviousModalOpen(false);
            }
            setSubModalOpen(false);
            resetForm();

            setSubmitting(false);
            console.log(subscription);
          }}
        >
          {({ values, isValid }) => {
            const { title, selectedCategory, billing, selectedBillingType, selectedColor, cost } =
              values;
            const findCorrectCurrency = () => {
              const correctCurrency = currencies.find(currency => currency.name === billing.name);
              return correctCurrency?.currencyIcon;
            };

            return (
              <Form className="flex flex-col">
                <div
                  className={clsx(
                    scrollbarStyles,
                    "inline-flex overflow-y-auto flex-col py-2 px-3 pb-20"
                  )}
                >
                  <div className="flex flex-row justify-between">
                    <button onClick={() => setSubModalOpen(open => !open)}>
                      <Rotate360Anim>
                        <ArrowLeftIcon className="w-8 h-8 fill-slate-700 hover:fill-slate-800" />
                      </Rotate360Anim>
                    </button>
                  </div>
                  <SubscriptionCard
                    title={title}
                    category={selectedCategory.name}
                    price={`${cost === "" ? "0" : cost}${findCorrectCurrency()} ${
                      billingTypes[selectedBillingType.name]
                    }`}
                    cardColor={selectedColor}
                    imageUrl={""}
                  />
                  <Dialog.Title
                    as="h3"
                    className="mt-4 text-lg font-medium leading-6 text-left text-gray-700"
                  >
                    General
                  </Dialog.Title>
                  <div className="mt-4">
                    <div className="flex flex-row">
                      <div className="w-6/12 sm:w-full">
                        <Input
                          name="title"
                          type="text"
                          placeholder="Sub name"
                          className={clsx("px-3 w-11/12")}
                          label={
                            <>
                              Name <span className="text-red-500">*</span>
                            </>
                          }
                        />
                      </div>
                      <div className="w-6/12 sm:w-full">
                        <SelectCategoryModal name="selectedCategory" />
                      </div>
                    </div>
                    <ColorPicker name="selectedColor" />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="mt-4 text-lg font-medium leading-6 text-left text-gray-700"
                  >
                    Billing
                  </Dialog.Title>
                  <div className="mt-4">
                    <div className="flex flex-row">
                      <div className="w-6/12">
                        <Input
                          name="cost"
                          inputPrefix={true}
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
                        <SelectField
                          title="Type"
                          name="selectedBillingType"
                          options={subscriptionTypeAsSelectValues}
                        />
                      </div>
                    </div>

                    <div className="flex flex-row mt-3">
                      <div className="w-8/12 xs2:w-7/12">
                        <DatePicker name="subscriptionStartDate" />
                      </div>
                      <div className="w-4/12 xs2:w-5/12">
                        <SelectCurrencyModal name="billing" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex fixed bottom-0 flex-row-reverse justify-center py-2 px-6 w-full bg-gray-50 rounded-b-xl">
                  <Button type="submit" isValid={isValid}>
                    Add sub
                  </Button>
                </div>
                {/* <div className="fixed -bottom-3 pb-3 w-full h-1 bg-gray-50 rounded-b-xl"></div> */}
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};
