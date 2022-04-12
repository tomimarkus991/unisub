import * as Yup from "yup";

import { cardColors, categories, currencies, subscriptionTypeAsSelectValues } from "..";

const SUB_TITLE_LENGTH = 30;

export const SubModalYupSchema = Yup.object().shape({
  selectedColor: Yup.string().oneOf(Object.keys(cardColors), "Invalid color"),
  title: Yup.string()
    .max(SUB_TITLE_LENGTH, `Must be ${SUB_TITLE_LENGTH} characters or less`)
    .required("Required"),
  selectedCategory: Yup.object({
    name: Yup.string().oneOf(categories.map(({ name }) => name)),
    icon: Yup.mixed().oneOf(categories.map(({ icon }) => icon)),
  }).required("Required"),
  cost: Yup.number().min(0, "Must be greater than 0").required("Required"),
  billing: Yup.object({
    name: Yup.string().oneOf(
      currencies.map(({ name }) => name),
      "Invalid currency"
    ),
    currencyIcon: Yup.string().oneOf(
      currencies.map(({ currencyIcon }) => currencyIcon),
      "Invalid Icon"
    ),
    image: Yup.string(),
  }).required("Required"),
  selectedBillingType: Yup.object({
    id: Yup.number(),
    name: Yup.string().oneOf(
      subscriptionTypeAsSelectValues.map(({ name }) => name),
      "Invalid billing type"
    ),
  }).required("Required"),

  subscriptionStartDate: Yup.date().required("Required"),
});
