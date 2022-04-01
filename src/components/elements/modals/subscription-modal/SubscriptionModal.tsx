import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import moment from "moment";
import { Fragment, useState } from "react";

import { subscriptionTypeAsSelectValues, categories } from "app-constants";
import { RealButton, Input, Button, SelectField, DatePicker } from "components/elements";
import { CardColorType, CategoryCardItem, BillingType, Subscription, SelectOption } from "types";

import {
  ColorPicker,
  SelectCategoryModal,
  SelectCurrencyModal,
  SubscriptionCard,
} from "./components";

export const SubscriptionModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<CardColorType>("white");
  const [title, setTitle] = useState<string>("Sub name");
  const [selectedCategory, setSelectedCategory] = useState<CategoryCardItem>(categories[0]);
  const [billing, setBilling] = useState<BillingType>({
    cost: 0,
    currency: "EUR",
    billingType: "monthly",
  });
  const [selectedBillingType, setSelectedBillingType] = useState<SelectOption>(
    subscriptionTypeAsSelectValues[0]
  );
  const [subscriptionStartDate, setSubscriptionStartDate] = useState<Date | null>(new Date());

  const handleSubscriptionSubmit = () => {
    const subscription: Subscription = {
      id: "-1",
      title,
      color: selectedColor,
      category: selectedCategory.name,
      startDate: moment(subscriptionStartDate).unix(),
      currency: billing.currency,
      icon: "",
      cost: billing.cost,
      type: billing.billingType,
    };
    console.log("subscription", subscription);

    setOpen(false);
  };

  return (
    <>
      <RealButton
        onClick={() => {
          setOpen(true);
        }}
      >
        Add subscription
      </RealButton>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="overflow-y-auto fixed inset-0 z-10" onClose={setOpen}>
          <div className="flex justify-center items-center p-0 px-4 pt-4 pb-20 min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 scale-95"
              enterTo="opacity-100 translate-y-0 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 scale-100"
              leaveTo="opacity-0 translate-y-4 scale-95"
            >
              <div className="inline-block my-8 w-full max-w-xl align-bottom bg-white rounded-xl shadow-xl transition-all transform">
                <div className="p-6 px-4 pt-5 pb-4">
                  <div className="flex items-start">
                    <div className="mt-0 w-full">
                      <Dialog.Title
                        as="h3"
                        className="mb-3 text-lg font-medium leading-6 text-center text-gray-700 uppercase"
                      >
                        Add a new Subscription
                      </Dialog.Title>
                      <SubscriptionCard
                        title={title}
                        category={selectedCategory.name}
                        price="7€ per month"
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
                            <div className="mb-2">
                              <label htmlFor="name-input">Name</label>
                            </div>
                            <Input
                              id="name-input"
                              className={clsx(
                                "px-6 w-11/12 font-semibold outline-none focus:ring-2 ",
                                `focus:ring-purple-500`
                              )}
                              maxLength={30}
                              onChange={e => setTitle(e.target.value)}
                            />
                          </div>
                          <div className="w-6/12 sm:w-full">
                            <SelectCategoryModal
                              value={selectedCategory}
                              setValue={setSelectedCategory}
                              selectedColor={selectedColor}
                            />
                          </div>
                        </div>
                        <ColorPicker
                          selectedColor={selectedColor}
                          setSelectedColor={setSelectedColor}
                        />
                      </div>
                      <Dialog.Title
                        as="h3"
                        className="mt-4 text-lg font-medium leading-6 text-left text-gray-700"
                      >
                        Billing
                      </Dialog.Title>
                      <div className="mt-4">
                        <div className="flex flex-row">
                          <div className="w-4/12">
                            <div className="mb-2">
                              <label htmlFor="cost-input">Cost</label>
                            </div>
                            <Input
                              id="cost-input"
                              className={clsx(
                                "px-3 w-10/12 font-semibold outline-none focus:ring-2"
                              )}
                              maxLength={6}
                              onChange={e =>
                                setBilling((prevState: BillingType) => ({
                                  ...prevState,
                                  cost: Number(e.target.value),
                                }))
                              }
                            />
                          </div>
                          <div className="w-4/12">
                            <SelectCurrencyModal value={billing.currency} setValue={setBilling} />
                          </div>
                          <div className="w-6/12">
                            <SelectField
                              title="Type"
                              options={subscriptionTypeAsSelectValues}
                              value={selectedBillingType}
                              setValue={setSelectedBillingType}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row mt-3">
                          <DatePicker
                            subscriptionStartDate={subscriptionStartDate}
                            setSubscriptionStartDate={setSubscriptionStartDate}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row-reverse py-3 px-6 bg-gray-50 rounded-b-xl">
                  <Button onClick={() => handleSubscriptionSubmit()}>Add subscription</Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};
