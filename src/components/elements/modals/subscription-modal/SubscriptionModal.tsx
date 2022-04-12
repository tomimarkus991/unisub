import { Dialog } from "@headlessui/react";
import { PlusCircleIcon } from "@heroicons/react/solid";
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
} from "app-constants";
import { RealButton, Input, Button, Modal, SelectField } from "components/elements";
import { useSub } from "context";
import {
  CardColorType,
  CategoryCardItem,
  Subscription,
  SelectOption,
  SubscriptionType,
  BillingType,
} from "types";

import {
  ColorPicker,
  DatePicker,
  SelectCategoryModal,
  SelectCurrencyModal,
  SubscriptionCard,
} from ".";

interface Props {
  isIcon?: boolean;
}

export interface SubFormValues {
  selectedColor: CardColorType;
  title: string;
  selectedCategory: CategoryCardItem;
  billing: BillingType<string>;
  selectedBillingType: SelectOption<SubscriptionType>;
  subscriptionStartDate: Date | null;
}

export const SubscriptionModal = ({ isIcon = true }: Props) => {
  const [subModalOpen, setSubModalOpen] = useState(false);

  const initialValues: SubFormValues = {
    selectedColor: "white",
    title: "",
    selectedCategory: categories[0],
    billing: {
      cost: "",
      currencyIcon: "€",
      name: "EUR",
      image: "european-union.svg",
    },
    selectedBillingType: subscriptionTypeAsSelectValues[0],
    subscriptionStartDate: new Date(),
  };

  const { setSubs } = useSub();

  const handleSubscriptionSubmit = ({
    title,
    billing,
    selectedColor,
    selectedBillingType,
    selectedCategory,
    subscriptionStartDate,
  }: SubFormValues) => {
    const subscription: Subscription = {
      id: "-1",
      title,
      color: selectedColor,
      category: selectedCategory.name,
      startDate: moment(subscriptionStartDate).unix(),
      currency: billing.name,
      cost: parseInt(billing.cost),
      type: selectedBillingType.name,
      active: true,
      nextPaymentDate: moment(subscriptionStartDate)
        .add(1, mapSubTypeToMomentType(selectedBillingType.name))
        .unix(),
    };
    setSubs(oldSubs => [...oldSubs, subscription]);
    console.log(subscription);
    setSubModalOpen(false);
    // setSelectedColor("white");
    // setSelectedCategory(categories[0]);
    // setBilling({
    //   cost: 0,
    //   currency: "EUR",
    //   currencyIcon: "€",
    // });
    // setSelectedBillingType(subscriptionTypeAsSelectValues[0]);
    // setSubscriptionStartDate(new Date());
  };

  return (
    <>
      <Modal
        open={subModalOpen}
        setOpen={setSubModalOpen}
        modalButton={
          <>
            {isIcon ? (
              <PlusCircleIcon
                className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800"
                onClick={() => {
                  setSubModalOpen(true);
                }}
              />
            ) : (
              <RealButton
                onClick={() => {
                  setSubModalOpen(true);
                }}
              >
                Add subscription
              </RealButton>
            )}
          </>
        }
      >
        <Formik
          initialValues={initialValues}
          validationSchema={SubModalYupSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(false);

            handleSubscriptionSubmit(values);
            resetForm();
          }}
        >
          {({ values }) => {
            const { title, selectedCategory, billing, selectedBillingType, selectedColor } = values;
            const findCorrectCurrency = () => {
              const correctCurrency = currencies.find(currency => currency.name === billing.name);
              return correctCurrency?.currencyIcon;
            };
            return (
              <Form>
                <div className="p-6 px-4 pt-5 pb-4">
                  <div className="flex items-start">
                    <div className="mt-0 w-full">
                      <Dialog.Title
                        as="h3"
                        className="mb-4 text-lg font-medium leading-6 text-center text-gray-700 uppercase"
                      >
                        Add a new Subscription
                      </Dialog.Title>
                      <SubscriptionCard
                        title={title}
                        category={selectedCategory.name}
                        price={`${
                          billing.cost === "" ? "0" : billing.cost
                        }${findCorrectCurrency()} ${billingTypes[selectedBillingType.name]}`}
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
                              className={clsx(
                                "px-3 w-11/12 font-semibold outline-none focus:ring-2"
                              )}
                              label={
                                <>
                                  Name <span className="text-red-500">*</span>
                                </>
                              }
                            />
                          </div>
                          <div className="w-6/12 sm:w-full">
                            <SelectCategoryModal
                              name="selectedCategory"
                              selectedColor={selectedColor}
                            />
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
                              name="billing.cost"
                              type="number"
                              placeholder="0"
                              className={clsx(
                                "px-3 w-10/12 font-semibold outline-none focus:ring-2"
                              )}
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
                  </div>
                </div>
                <div className="flex flex-row-reverse justify-center py-3 px-6 bg-gray-50 rounded-b-xl">
                  <Button type="submit">Add subscription</Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};
