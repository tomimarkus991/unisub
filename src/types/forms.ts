import { CardColorType, CategoryCardItem, SubscriptionBillingType, CurrencyType } from "types";

export interface SubFormValues {
  selectedColor: CardColorType;
  title: string;
  selectedCategory: CategoryCardItem;
  billing: CurrencyType;
  cost: string;
  selectedBillingType: SubscriptionBillingType;
  subscriptionStartDate: Date | null;
}
