import { ReactNode } from "react";

import { cardColors } from "app-constants";

export type CategoryName =
  | "Other"
  | "Entertainment"
  | "Gaming"
  | "Sport"
  | "Food"
  | "Travel"
  | "Education"
  | "Health"
  | "Shopping"
  | "Finance"
  | "Transport"
  | "Communication"
  | "Home"
  | "Work"
  | "Family"
  | "Music"
  | "Technology";

export interface CategoryCardItem {
  name: CategoryName;
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
  category: CategoryName;
  startDate: number;
  cost: number;
  currency: string;
  color: CardColorType;
  billingType: SubscriptionBillingType;
  active: boolean;
  nextPaymentDate: number;
}

export interface SelectOption<T> {
  id: number;
  name: T;
}
