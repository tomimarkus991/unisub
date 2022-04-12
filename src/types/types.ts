import { ReactNode } from "react";

import { cardColors } from "app-constants";

export interface CategoryCardItem {
  name: string;
  icon: ReactNode;
}

export type CardColorType = keyof typeof cardColors;
export type SubscriptionType = "monthly" | "yearly" | "weekly" | "daily";

export interface UserType {
  id: string;
  email: string;
  username: string;
  avatar: string | null;
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
