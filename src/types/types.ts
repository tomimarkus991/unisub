import { cardColors } from "app-constants";

export interface CategoryCardItem {
  name: string;
  icon: string;
}
export interface CurrencyCardItem {
  name: CurrencyType;
  icon: string;
}

export type CardColorType = keyof typeof cardColors;
export type SubscriptionType = "monthly" | "yearly" | "weekly";

export type CurrencyType =
  | "EUR"
  | "USD"
  | "GBP"
  | "JPY"
  | "CAD"
  | "AUD"
  | "CHF"
  | "NZD"
  | "SEK"
  | "NOK"
  | "DKK"
  | "PLN"
  | "MXN"
  | "CZK"
  | "HUF"
  | "BRL"
  | "RUB"
  | "TRY"
  | "ILS"
  | "KRW"
  | "MYR"
  | "PHP"
  | "IDR"
  | "THB"
  | "VND"
  | "HRK"
  | "CNY"
  | "INR"
  | "ZAR"
  | "RON"
  | "BGN"
  | "ISK"
  | "LTL"
  | "LVL"
  | "EUR"
  | "USD"
  | "GBP"
  | "JPY"
  | "CAD"
  | "AUD"
  | "CHF"
  | "NZD"
  | "SEK"
  | "NOK"
  | "DKK"
  | "PLN"
  | "MXN"
  | "CZK"
  | "HUF"
  | "BRL"
  | "RUB"
  | "TRY"
  | "ILS"
  | "KRW"
  | "MYR"
  | "PHP"
  | "IDR"
  | "THB"
  | "VND"
  | "HRK"
  | "CNY"
  | "INR"
  | "ZAR"
  | "RON"
  | "BGN"
  | "ISK"
  | "LTL"
  | "LVL";

export interface BillingType {
  cost: number;
  currency: CurrencyType;
  billingType: SubscriptionType;
}
export interface CurrencyModalType {
  name: CurrencyType;
  icon: string;
}

export interface Subscription {
  id: string;
  title: string;
  category: CategoryCardItem;
  startDate: number;
  cost: number;
  currency: string;
  color: CardColorType;
  icon: string;
  type: SubscriptionType;
}

export interface SelectOption {
  id: number;
  name: string;
}
