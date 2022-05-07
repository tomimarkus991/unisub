import moment from "moment";
import {
  HiBeaker,
  HiCake,
  HiFilm,
  HiFingerPrint,
  HiHome,
  HiMusicNote,
  HiPuzzle,
  HiChip,
  FaDumbbell,
} from "react-icons/all";

import {
  CategoryCardItem,
  CurrencyType,
  SubscriptionPreset,
  SubscriptionBillingType,
  Subscription,
} from "types";

export const cardColors = {
  green: "bg-gradient-to-r from-emerald-500 via-green-500 to-lime-500",
  orange: "bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-400",
  purpleBlue: "bg-gradient-to-tr from-blue-700 to-pink-500",
  // purple: "bg-gradient-to-tl from-violet-500 to-fuchsia-500",
  // purpleBlue: "bg-gradient-to-r from-purple-700 to-blue-600",
  indigo: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  red: "bg-gradient-to-br from-red-500 to-pink-600",
  // yellow: "bg-gradient-to-tr from-yellow-400 to-orange-500",
  gray: "bg-gradient-to-tr from-gray-600 to-gray-400",
  white: "bg-gradient-to-r from-slate-200 to-white",
  darkBlue: "bg-gradient-to-bl from-blue-500 via-indigo-700 to-blue-500",
  pink: "bg-gradient-to-tr from-rose-500 via-pink-500 to-rose-700",
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

export const mapSubTypeToMomentType = (paymentType: SubscriptionBillingType) => {
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
    allCosts: {
      daily: 0,
      weekly: 0,
      monthly: 0,
      yearly: 0,
    },
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
      color: "orange",
    },
    {
      title: "Apple TV+",
      category: "Streaming",
    },
    { title: "Twitch", category: "Streaming", color: "purpleBlue" },
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

export const categories: CategoryCardItem[] = [
  { name: "Other", icon: <HiFingerPrint className="sub-category-item" /> },
  { name: "Streaming", icon: <HiFilm className="sub-category-item" /> },
  { name: "Gaming", icon: <HiPuzzle className="sub-category-item" /> },
  { name: "Fitness", icon: <FaDumbbell className="sub-category-item" /> },
  { name: "Food", icon: <HiCake className="sub-category-item" /> },
  { name: "Education", icon: <HiBeaker className="sub-category-item" /> },
  { name: "Music", icon: <HiMusicNote className="sub-category-item" /> },
  { name: "Home", icon: <HiHome className="sub-category-item" /> },
  { name: "Software", icon: <HiChip className="sub-category-item" /> },
];
