import { billingTypes, currencies } from "app-constants";
import { CurrencyType, IAllCosts, Subscription, SubscriptionBillingType } from "types";

const findCurrencyIcon = (currency: string) => {
  const { currencyIcon } = currencies.find(value => value.name === currency) as CurrencyType;

  return currencyIcon;
};

export const createSubPrice = (sub: Subscription) => {
  return `${sub.cost}${findCurrencyIcon(sub.currency)} ${billingTypes[sub.billingType]}`;
};
// takes in the sub cost and type.
// then based on that calculates all the prices
export const generateAllCosts = (cost: number, billingType: SubscriptionBillingType): IAllCosts => {
  let allCosts: IAllCosts = {
    daily: 0,
    weekly: 0,
    monthly: 0,
    yearly: 0,
  };

  if (billingType === "monthly") {
    allCosts = {
      daily: cost / 30,
      weekly: cost / 4,
      monthly: cost,
      yearly: cost * 12,
    };
  } else if (billingType === "yearly") {
    allCosts = {
      daily: cost / 365,
      weekly: cost / 52,
      monthly: cost / 12,
      yearly: cost,
    };
  } else if (billingType === "weekly") {
    allCosts = {
      daily: cost / 7,
      weekly: cost,
      monthly: cost * 4,
      yearly: cost * 52,
    };
  } else if (billingType === "daily") {
    allCosts = {
      daily: cost,
      weekly: cost * 7,
      monthly: cost * 30,
      yearly: cost * 365,
    };
  }

  return allCosts;
};
