import { CurrencyType, CategoryCardItem, SelectOption, SubscriptionType } from "types";

export const cardColors = {
  green: "bg-gradient-to-r from-green-600 to-green-400",
  orange: "bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400",
  blue: "bg-gradient-to-tr from-blue-700 to-pink-500",
  purple: "bg-gradient-to-tl from-violet-500 to-fuchsia-500",
  purpleBlue: "bg-gradient-to-r from-purple-700 to-blue-600",
  indigo: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  red: "bg-gradient-to-r from-red-600 to-red-400",
  yellow: "bg-gradient-to-r from-yellow-400 to-orange-400",
  gray: "bg-gradient-to-tr from-gray-600 to-gray-400",
  white: "bg-gradient-to-r from-slate-200 to-white",
};

export const billingTypes = {
  monthly: "per month",
  daily: "per day",
  weekly: "per week",
  yearly: "per year",
};
export interface ICurrencyIcons {
  EUR: "€";
  USD: "$";
}
// export const currencyIcons = {
//   EUR: { name: "EUR", icon: "€", flag: "european-union.svg" },
//   USD: { name: "USD", icon: "$", flag: "united-states.svg" },
// };

export const categories: CategoryCardItem[] = [
  { name: "Other", icon: "test-icon" },
  { name: "Entertainment", icon: "test-icon" },
  { name: "Gaming", icon: "test-icon" },
  { name: "Sport", icon: "test-icon" },
  { name: "Food", icon: "test-icon" },
  { name: "Travel", icon: "test-icon" },
  { name: "Education", icon: "test-icon" },
  { name: "Health", icon: "test-icon" },
  { name: "Shopping", icon: "test-icon" },
  { name: "Finance", icon: "test-icon" },
  { name: "Transport", icon: "test-icon" },
  { name: "Communication", icon: "test-icon" },
  { name: "Home", icon: "test-icon" },
  { name: "Work", icon: "test-icon" },
  { name: "Family", icon: "test-icon" },
];
export const currencies: CurrencyType[] = [
  { name: "EUR", currencyIcon: "€", image: "european-union.svg" },
  { name: "USD", currencyIcon: "$", image: "united-states.svg" },
];
export const subscriptionTypeAsSelectValues: SelectOption<SubscriptionType>[] = [
  { id: 1, name: "monthly" },
  { id: 2, name: "daily" },
  { id: 3, name: "weekly" },
  { id: 4, name: "yearly" },
];

export type PaymentType = "monthly" | "yearly" | "weekly" | "daily";

export const mapSubTypeToMomentType = (paymentType: PaymentType) => {
  switch (paymentType) {
    case "monthly":
      return "month";
    case "yearly":
      return "year";
    case "weekly":
      return "week";
    case "daily":
      return "day";
    default:
      return "month";
  }
};
