import { billingTypes, currencies } from "app-constants";
import { CurrencyType, Subscription } from "types";

const findCurrencyIcon = (currency: string) => {
  const { currencyIcon } = currencies.find(value => value.name === currency) as CurrencyType;

  return currencyIcon;
};

export const createSubPrice = (sub: Subscription) => {
  return `${sub.cost}${findCurrencyIcon(sub.currency)} ${billingTypes[sub.billingType]}`;
};
