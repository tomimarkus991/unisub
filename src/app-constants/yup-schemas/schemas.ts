import * as Yup from "yup";

import { cardColors, categories, currencies, subscriptionTypeAsSelectValues } from "..";

const SUB_TITLE_LENGTH = 30;

export const SubModalYupSchema = Yup.object({
  selectedColor: Yup.string().oneOf(Object.keys(cardColors), "Invalid color"),
  title: Yup.string()
    .max(SUB_TITLE_LENGTH, `Must be ${SUB_TITLE_LENGTH} characters or less`)
    .required("Required"),
  selectedCategory: Yup.string().oneOf(
    categories.map(({ name }) => name),
    "Invalid category"
  ),
  billing: Yup.object({
    cost: Yup.number().min(0, "Must be greater than 0").required("Required"),
    currency: Yup.string().oneOf(
      currencies.map(({ name }) => name),
      "Invalid currency"
    ),
    currencyIcon: Yup.string().oneOf(
      currencies.map(({ currencyIcon }) => currencyIcon),
      "Invalid Icon"
    ),
  }),
  selectedBillingType: Yup.string().oneOf(
    subscriptionTypeAsSelectValues.map(({ name }) => name),
    "Invalid billing type"
  ),
  // subscriptionStartDate
});
