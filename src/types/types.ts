import { cardColors } from "app-constants";

export interface CategoryCardItem {
  name: string;
  icon: string;
}
export interface CurrencyCardItem {
  name: CurrencyType;
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

export type CurrencyIconType =
  | "€"
  | "$"
  | "£"
  | "¥"
  | "C$"
  | "A$"
  | "CHF"
  | "NZ$"
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
  currencyIcon: CurrencyIconType;
}
export interface CurrencyModalType {
  name: CurrencyType;
  currencyIcon: CurrencyIconType;
  icon: string;
}

export interface Subscription {
  id: string;
  title: string;
  category: string;
  startDate: number;
  cost: number;
  currency: string;
  color: CardColorType;
  icon: string;
  type: SubscriptionType | string;
}

export interface SelectOption<T> {
  id: number;
  name: T;
}
