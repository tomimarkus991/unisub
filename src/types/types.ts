import { ReactNode } from "react";

import { cardColors } from "constants";
export type CategoryNames =
  | "Other"
  | "Streaming"
  | "Gaming"
  | "Fitness"
  | "Food"
  | "Education"
  | "Music"
  | "Home"
  | "Software";
export interface CategoryCardItem {
  name: CategoryNames;
  icon: ReactNode;
}

export type CardColorType = keyof typeof cardColors;
export type SubscriptionBillingType = "monthly" | "yearly" | "weekly" | "daily";

export interface UserType {
  id: string;
  email: string;
  username: string;
  avatar: string | null;
}

export interface Subscription {
  id: string;
  title: string;
  category: CategoryNames;
  startDate: number;
  cost: number;
  currency: string;
  color: CardColorType;
  billingType: SubscriptionBillingType;
  active: boolean;
  nextPaymentDate: number;
}

export interface SubscriptionPreset {
  title: string;
  category?: CategoryNames;
  color?: CardColorType;
  cost?: number;
  currency?: string;
  billingType?: SubscriptionBillingType;
  active?: boolean;
  startDate?: number;
  nextPaymentDate?: number;
}

export interface FinalSubscriptionPreset {
  title: string;
  category: CategoryNames;
  color: CardColorType;
  cost: number;
  currency: string;
  billingType: SubscriptionBillingType;
  active: boolean;
  startDate: number;
  nextPaymentDate: number;
}

export interface CreateSubscriptionPreset {
  title: string;
  category: CategoryNames;
  color: CardColorType;
}

export interface SelectOption<T> {
  id: number;
  name: T;
}
