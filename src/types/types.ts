import { cardColors } from "app-constants";

export interface CategoryCardItem {
  name: string;
  icon: string;
}

export type CardColorType = keyof typeof cardColors;

export interface Subscription {
  id: string;
  title: string;
  category: CategoryCardItem;
  startDate: number;
  price: number;
  currency: string;
  color: CardColorType;
  icon: string;
  type: "monthly" | "yearly" | "one-time" | "weekly";
}
