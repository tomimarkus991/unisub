import * as Yup from "yup";

import { billingTypeValues, cardColors, currencies } from "..";

const SUB_TITLE_LENGTH = 30;
// const today = new Date().setHours(0, 0, 0, 0).toString();

const today = new Date();
today.setHours(0, 0, 0, 0);

export const SubModalYupSchema = Yup.object().shape({
  selectedColor: Yup.string().oneOf(Object.keys(cardColors), "Invalid color"),
  title: Yup.string()
    .max(SUB_TITLE_LENGTH, `Must be ${SUB_TITLE_LENGTH} characters or less`)
    .required("Required"),
  // selectedCategory: Yup.object({
  //   name: Yup.string().oneOf(categories.map(({ name }) => name)),
  //   icon: Yup.mixed().oneOf(categories.map(({ icon }) => icon)),
  // }).required("Required"),
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
  selectedBillingType: Yup.string()
    .oneOf(billingTypeValues, "Invalid billing type")
    .required("Required"),

  nextPaymentDate: Yup.date()
    .min(today, "Can't be in the past")
    .required("Required")
    .typeError("Invalid Date"),
});
export const SearchSubYupSchema = Yup.object().shape({
  searchString: Yup.string(),
});
