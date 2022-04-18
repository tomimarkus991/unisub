import moment from "moment";

import { CurrencyType, CategoryCardItem, SubscriptionBillingType, Subscription } from "types";

export const cardColors = {
  green: "bg-gradient-to-r from-green-600 to-green-400",
  orange: "bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-400",
  blue: "bg-gradient-to-tr from-blue-700 to-pink-500",
  purple: "bg-gradient-to-tl from-violet-500 to-fuchsia-500",
  purpleBlue: "bg-gradient-to-r from-purple-700 to-blue-600",
  indigo: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  red: "bg-gradient-to-r from-red-500 via-red-600 to-red-500",
  yellow: "bg-gradient-to-r from-yellow-400 to-orange-400",
  gray: "bg-gradient-to-tr from-gray-600 to-gray-400",
  white: "bg-gradient-to-r from-slate-200 to-white",
  darkBlue: "bg-gradient-to-bl from-blue-500 via-blue-700 to-blue-500",
  pink: "bg-gradient-to-tr from-pink-500 via-pink-600 to-pink-500",
};
export const cardColorsReversed = {
  green: "bg-gradient-to-r from-green-400 to-green-600",
  orange: "bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-600",
  blue: "bg-gradient-to-tr from-blue-500 to-pink-700",
  purple: "bg-gradient-to-tl from-fuchsia-500 to-violet-500",
  purpleBlue: "bg-gradient-to-r from-blue-600 to-purple-700",
  indigo: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500",
  red: "bg-gradient-to-r from-red-500 via-red-600 to-red-500",
  yellow: "bg-gradient-to-r from-orange-400 to-yellow-400",
  gray: "bg-gradient-to-tr from-gray-400 to-gray-600",
  white: "bg-gradient-to-r from-white to-slate-200",
  darkBlue: "bg-gradient-to-bl from-blue-500 via-blue-700 to-blue-500",
  pink: "bg-gradient-to-tr from-pink-500 via-pink-600 to-pink-500",
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
export const billingTypeValues: SubscriptionBillingType[] = [
  "daily",
  "weekly",
  "monthly",
  "yearly",
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

export const presetSubs: Subscription[] = [
  {
    id: "1",
    active: true,
    title: "Spotify",
    billingType: "monthly",
    category: "Music",
    color: "green",
    cost: 7.99,
    currency: "EUR",
    startDate: moment(new Date()).unix(),
    nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
  },
  {
    id: "2",
    active: true,
    title: "Netflix",
    billingType: "monthly",
    category: "Entertainment",
    color: "red",
    cost: 9.99,
    currency: "EUR",
    startDate: moment(new Date()).unix(),
    nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
  },
  {
    id: "3",
    active: true,
    title: "Amazon",
    billingType: "monthly",
    category: "Shopping",
    color: "yellow",
    cost: 19.99,
    currency: "EUR",
    startDate: moment(new Date()).unix(),
    nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
  },
  {
    id: "4",
    active: true,
    title: "Apple",
    billingType: "monthly",
    category: "Technology",
    color: "white",
    cost: 29.99,
    currency: "EUR",
    startDate: moment(new Date()).unix(),
    nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
  },
  {
    id: "5",
    active: true,
    title: "Apple",
    billingType: "monthly",
    category: "Technology",
    color: "gray",
    cost: 29.99,
    currency: "EUR",
    startDate: moment(new Date()).unix(),
    nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
  },
  {
    id: "6",
    active: true,
    title: "Apple",
    billingType: "monthly",
    category: "Technology",
    color: "darkBlue",
    cost: 29.99,
    currency: "EUR",
    startDate: moment(new Date()).unix(),
    nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
  },
  {
    id: "7",
    active: true,
    title: "Amazon",
    billingType: "monthly",
    category: "Shopping",
    color: "yellow",
    cost: 19.99,
    currency: "EUR",
    startDate: moment(new Date()).unix(),
    nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
  },
  {
    id: "8",
    active: true,
    title: "Spotify",
    billingType: "monthly",
    category: "Music",
    color: "red",
    cost: 7.99,
    currency: "EUR",
    startDate: moment(new Date()).unix(),
    nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
  },
];
