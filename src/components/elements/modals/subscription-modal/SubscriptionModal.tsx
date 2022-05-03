import { Form, Formik } from "formik";

import clsx from "clsx";
import moment from "moment";
import { useEffect, useState } from "react";
import { HiArrowLeft, HiPlusCircle, HiX } from "react-icons/all";

import {
  billingTypes,
  billingTypeValues,
  cardColors,
  categories,
  currencies,
  mapSubTypeToMomentType,
  SubModalYupSchema,
} from "app-constants";
import {
  animations,
  AnimationWrapper,
  Button,
  Modal,
  ModalFooterContainer,
  ModalHeaderContainer,
  ModalTitle,
  RealButton,
  SubscriptionCard,
  BillingSection,
  GeneralSection,
} from "components";
import { useSub, useSubModal } from "context";
import {
  CardColorType,
  CategoryCardItem,
  CurrencyType,
  Subscription,
  SubscriptionBillingType,
} from "types";
import { generateAllCosts } from "utils";

export interface SubFormValues {
  selectedColor: CardColorType;
  title: string;
  selectedCategory: CategoryCardItem;
  billing: CurrencyType;
  cost: string;
  selectedBillingType: SubscriptionBillingType;
  subscriptionStartDate: Date | null;
}

interface Props {
  buttonType?: "icon" | "real" | "regular" | "children";
  buttonTitle?: string;
  cardColor?: CardColorType;
  subValues?: Subscription;
  children?: React.ReactNode;
}

export const SubscriptionModal = ({
  buttonType = "regular",
  buttonTitle = "Add subscription",
  cardColor,
  subValues,
  children,
}: Props) => {
  const { setIsChooseSubModalOpen } = useSubModal();
  const { setSubs } = useSub();
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  const [initialValues, setInitialValues] = useState<SubFormValues>({
    selectedColor: "white",
    title: "",
    selectedCategory: categories[0],
    cost: "",
    billing: currencies[0],
    selectedBillingType: billingTypeValues[2],
    subscriptionStartDate: new Date(),
  });

  useEffect(() => {
    if (subValues) {
      const { title, color, billingType, category, cost } = subValues;
      setInitialValues({
        selectedColor: color,
        title,
        selectedCategory: categories.find(
          subCategory => category === subCategory.name
        ) as CategoryCardItem,
        cost: cost.toString(),
        billing: currencies[0],
        selectedBillingType: billingType,
        subscriptionStartDate: new Date(),
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Modal
      open={isSubscriptionModalOpen}
      setOpen={setIsSubscriptionModalOpen}
      maxWidth="xl"
      modalButton={
        <>
          {buttonType === "icon" && (
            <AnimationWrapper
              keyIndex="create-modal-plus-icon"
              variants={animations.scaleAndRotation}
            >
              <HiPlusCircle
                className="w-14 h-14 cursor-pointer fill-slate-700 hover:fill-slate-800"
                onClick={() => setIsSubscriptionModalOpen(true)}
              />
            </AnimationWrapper>
          )}
          {buttonType === "real" && (
            <RealButton onClick={() => setIsSubscriptionModalOpen(true)}>{buttonTitle}</RealButton>
          )}
          {buttonType === "regular" && cardColor && (
            <Button
              size="xs"
              variant="custom"
              onClick={() => setIsSubscriptionModalOpen(true)}
              customColors={`${cardColors[cardColor]} ring-2 ring-slate-300 ring-opacity-5`}
            >
              {buttonTitle}
            </Button>
          )}
          {buttonType === "children" && children && (
            <div role="button" tabIndex={0} onClick={() => setIsSubscriptionModalOpen(true)}>
              {children}
            </div>
          )}
        </>
      }
    >
      <Formik
        initialValues={initialValues}
        validationSchema={SubModalYupSchema}
        validateOnMount
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          const {
            billing,
            selectedBillingType,
            selectedCategory,
            selectedColor,
            subscriptionStartDate,
            title,
            cost,
          } = values;

          const subscription: Subscription = {
            id: "-1",
            title,
            color: selectedColor,
            category: selectedCategory.name,
            startDate: moment(subscriptionStartDate).unix(),
            currency: billing.name,
            cost: parseFloat(cost),
            allCosts: generateAllCosts(parseFloat(cost), selectedBillingType),
            billingType: selectedBillingType,
            active: true,
            nextPaymentDate: moment(subscriptionStartDate)
              .add(1, mapSubTypeToMomentType(selectedBillingType))
              .unix(),
          };

          setSubs(oldSubs => [...oldSubs, subscription]);

          setIsChooseSubModalOpen(false);

          setIsSubscriptionModalOpen(false);
          resetForm();

          setSubmitting(false);
        }}
      >
        {({ values, isValid }) => {
          const { title, selectedCategory, billing, selectedBillingType, selectedColor, cost } =
            values;
          const findCorrectCurrency = () => {
            const correctCurrency = currencies.find(currency => currency.name === billing.name);
            return correctCurrency?.currencyIcon;
          };

          return (
            <Form className={clsx("flex flex-col")}>
              <ModalHeaderContainer>
                <div role="button" tabIndex={0} onClick={() => setIsSubscriptionModalOpen(false)}>
                  <AnimationWrapper keyIndex="sub-modal-left-icon" variants={animations.rotate360}>
                    <HiArrowLeft className="w-8 h-8 fill-slate-700 hover:fill-slate-800" />
                  </AnimationWrapper>
                </div>
                <ModalTitle>Create sub</ModalTitle>
                <div role="button" tabIndex={0} onClick={() => setIsChooseSubModalOpen(false)}>
                  <AnimationWrapper keyIndex="sub-modal-x-icon" variants={animations.rotate360}>
                    <HiX className="w-8 h-8 fill-slate-700 hover:fill-slate-800" />
                  </AnimationWrapper>
                </div>
              </ModalHeaderContainer>
              <div
                className={clsx(
                  "scrollbar-styles",
                  "flex overflow-y-auto flex-col py-2 px-3 h-[50vh] min-h-[15rem]"
                )}
              >
                <SubscriptionCard
                  title={title}
                  category={selectedCategory.name}
                  price={`${cost === "" ? "0" : cost}${findCorrectCurrency()} ${
                    billingTypes[selectedBillingType]
                  }`}
                  cardColor={selectedColor}
                  imageUrl={""}
                />
                <GeneralSection />
                <BillingSection currencyIcon={values.billing.currencyIcon} />
              </div>
              <ModalFooterContainer>
                <Button type="submit" isValid={isValid}>
                  Add sub
                </Button>
              </ModalFooterContainer>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
};
