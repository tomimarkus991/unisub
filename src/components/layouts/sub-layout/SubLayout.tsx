import { billingTypes, currencies } from "app-constants";
import { useSub } from "context";
import { CurrencyModalType } from "types";

import { LayoutSubscriptionCard } from ".";

export const SubLayout = () => {
  const { subs } = useSub();
  const findCurrencyIcon = (currency: string) => {
    const { currencyIcon } = currencies.find(value => value.name === currency) as CurrencyModalType;

    return currencyIcon;
  };

  return (
    <div className="grid overflow-auto gap-2 justify-center last:pb-24">
      {subs.map(sub => {
        return (
          <LayoutSubscriptionCard
            key={sub.id}
            title={sub.title}
            category={sub.category}
            price={`${sub.cost}${findCurrencyIcon(sub.currency)} ${billingTypes[sub.type]}`}
            cardColor={sub.color}
            imageUrl={""}
            startDate={sub.startDate}
          />
        );
      })}
    </div>
  );
};
