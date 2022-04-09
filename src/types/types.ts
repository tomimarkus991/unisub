import { ReactNode } from "react";

import { cardColors } from "app-constants";

import { CurrencyIconType, CurrencyNameType } from ".";

export interface CategoryCardItem {
  name: string;
  icon: ReactNode;
}
export interface CurrencyCardItem {
  name: CurrencyNameType;
  currencyIcon: CurrencyIconType;
  icon: string;
}

export type CardColorType = keyof typeof cardColors;
export type SubscriptionType = "monthly" | "yearly" | "weekly" | "daily";

export interface UserType {
  id: string;
  email: string;
  username: string;
  avatar: string | null;
}

export interface BillingType {
  cost: number;
  currency: CurrencyNameType;
  currencyIcon: CurrencyIconType;
}
export interface CurrencyModalType {
  name: CurrencyNameType;
  currencyIcon: CurrencyIconType;
  image: string;
}

export interface Subscription {
  id: string;
  title: string;
  category: string;
  startDate: number;
  cost: number;
  currency: string;
  color: CardColorType;
  type: SubscriptionType;
  active: boolean;
  nextPaymentDate: number;
}

export interface SelectOption<T> {
  id: number;
  name: T;
}
