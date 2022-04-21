import { Dialog } from "@headlessui/react";
import { ArrowLeftIcon, PlusCircleIcon, XIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { Form, Formik } from "formik";
import moment from "moment";
import { useState } from "react";

import {
  billingTypeValues,
  categories,
  billingTypes,
  mapSubTypeToMomentType,
  SubModalYupSchema,
  currencies,
  scrollbarStyles,
  cardColors,
} from "app-constants";
import {
  RealButton,
  Input,
  Button,
  Modal,
  ScaleAndRotationAnim1,
  SubscriptionCard,
  Rotate360Anim,
} from "components/elements";
import { useSub, useSubModal } from "context";
import {
  CardColorType,
  CategoryCardItem,
  Subscription,
  SubscriptionBillingType,
  CurrencyType,
} from "types";

import {
  ColorPicker,
  DatePicker,
  SelectBillingTypeModal,
  SelectCategoryModal,
  SelectCurrencyModal,
} from ".";

export interface SubFormValues {
  selectedColor: CardColorType;
  title: string;
  selectedCategory: CategoryCardItem;
  billing: CurrencyType;
  cost: string;
  selectedBillingType: SubscriptionBillingType;
  subscriptionStartDate: Date | null;
}

interface Props {
  buttonType?: "icon" | "real" | "regular" | "children";
  buttonTitle?: string;
  cardColor?: CardColorType;
  subValues?: Subscription;
  children?: React.ReactNode;
}

export const SubscriptionModal = ({
  buttonType = "regular",
  buttonTitle = "Add subscription",
  cardColor,
  subValues,
  children,
}: Props) => {
  const [subModalOpen, setSubModalOpen] = useState(false);
  const { setIsChooseSubModalOpen } = useSubModal();

  let initialValues: SubFormValues = {
    selectedColor: "white",
    title: "",
    selectedCategory: categories[0],
    cost: "",
    billing: currencies[0],
    selectedBillingType: billingTypeValues[2],
    subscriptionStartDate: new Date(),
  };

  if (subValues) {
    const { title, color, billingType, category } = subValues;
    initialValues = {
      selectedColor: color,
      title,
      selectedCategory: categories.find(
        subCategory => category === subCategory.name
      ) as CategoryCardItem,
      cost: "",
      billing: currencies[0],
      selectedBillingType: billingType,
      subscriptionStartDate: new Date(),
    };
  }

  const { setSubs } = useSub();

  return (
    <>
      <Modal
        open={subModalOpen}
        setOpen={setSubModalOpen}
        modalButton={
          <>
            {buttonType === "icon" && (
              <ScaleAndRotationAnim1>
                <PlusCircleIcon
                  className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800"
                  onClick={() => {
                    setSubModalOpen(true);
                  }}
                />
              </ScaleAndRotationAnim1>
            )}
            {buttonType === "real" && (
              <RealButton
                onClick={() => {
                  setSubModalOpen(true);
                }}
              >
                {buttonTitle}
              </RealButton>
            )}
            {buttonType === "regular" && cardColor && (
              <Button
                size="xs"
                variant="custom"
                onClick={() => {
                  setSubModalOpen(true);
                }}
                customColors={`${cardColors[cardColor]} ring-2 ring-slate-300 ring-opacity-5`}
              >
                {buttonTitle}
              </Button>
            )}
            {buttonType === "children" && children && (
              <div
                role="button"
                tabIndex={0}
                onClick={() => {
                  setSubModalOpen(true);
                }}
              >
                {children}
              </div>
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
              billingType: selectedBillingType,
              active: true,
              nextPaymentDate: moment(subscriptionStartDate)
                .add(1, mapSubTypeToMomentType(selectedBillingType))
                .unix(),
            };

            setSubs(oldSubs => [...oldSubs, subscription]);

            setIsChooseSubModalOpen(false);

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
              <Form className={clsx("flex flex-col")}>
                <div className="flex flex-row justify-between items-center p-4">
                  <div role="button" tabIndex={0} onClick={() => setSubModalOpen(() => false)}>
                    <Rotate360Anim>
                      <ArrowLeftIcon className="w-8 h-8 fill-slate-700 hover:fill-slate-800" />
                    </Rotate360Anim>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-center text-gray-700 uppercase"
                  >
                    Create sub
                  </Dialog.Title>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setIsChooseSubModalOpen(() => false);
                    }}
                  >
                    <Rotate360Anim>
                      <XIcon className="w-8 h-8 fill-slate-700 hover:fill-slate-800" />
                    </Rotate360Anim>
                  </div>
                </div>
                <div
                  className={clsx(
                    scrollbarStyles,
                    "flex overflow-y-auto flex-col py-2 px-3 h-[65vh] min-h-[15rem] bg-white rounded-t-xl"
                  )}
                >
                  <SubscriptionCard
                    title={title}
                    category={selectedCategory.name}
                    price={`${cost === "" ? "0" : cost}${findCorrectCurrency()} ${
                      billingTypes[selectedBillingType]
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
                    <ColorPicker name="selectedColor" />
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
                        <SelectBillingTypeModal name="selectedBillingType" />
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
                <div className="flex justify-center py-2 px-6 w-full bg-gray-50 rounded-b-xl">
                  <Button type="submit" isValid={isValid}>
                    Add sub
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </>
  );
};
