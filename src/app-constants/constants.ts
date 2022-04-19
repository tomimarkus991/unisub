import moment from "moment";

import { CurrencyType, SubscriptionPreset, SubscriptionBillingType, Subscription } from "types";

export const cardColors = {
  green: "bg-gradient-to-r from-green-600 to-green-400",
  orange: "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400",
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

export const createPresetSubs = (): Subscription[] => {
  const subDefaults: Subscription = {
    id: "1",
    title: "",
    active: true,
    billingType: "monthly",
    currency: "EUR",
    startDate: moment(new Date()).unix(),
    nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
    cost: 0,
    color: "white",
    category: "Other",
  };

  const subs: SubscriptionPreset[] = [
    {
      title: "Netflix",
      category: "Streaming",
      color: "red",
    },
    {
      title: "Spotify",
      category: "Music",
      color: "green",
    },
    {
      title: "Amazon Prime Video",
      category: "Streaming",
      color: "yellow",
    },
    {
      title: "Apple TV+",
      category: "Streaming",
    },
    { title: "Twitch", category: "Streaming", color: "purple" },
    {
      title: "NordVPN",
      category: "Software",
      color: "darkBlue",
    },
    {
      title: "YouTube Premium",
      category: "Streaming",
      color: "red",
    },
    {
      title: "Disney+",
      category: "Streaming",
      color: "darkBlue",
    },
    {
      title: "Hulu",
      category: "Streaming",
      color: "green",
    },
    {
      title: "MasterClass",
      category: "Streaming",
    },
    {
      title: "Audible",
      category: "Education",
      color: "orange",
    },
    {
      title: "Kindle Unlimited",
      category: "Education",
    },
    {
      title: "Google One",
      category: "Software",
    },
  ];

  const presetSubs = subs.map(sub => {
    return {
      ...subDefaults,
      ...sub,
    };
  });

  return presetSubs.sort((a, b) => {
    if (a.title && b.title) {
      return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1;
    } else {
      return 0;
    }
  });
};
