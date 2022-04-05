import { billingTypes } from "app-constants";
import { useSub } from "context";

import { LayoutSubscriptionCard } from "./components";

export const SubLayout = () => {
  const { subs } = useSub();

  return (
    <div className="grid overflow-auto gap-2 justify-center last:pb-6 first:mt-6">
      {subs.map(sub => (
        <LayoutSubscriptionCard
          key={sub.id}
          title={sub.title}
          category={sub.category}
          price={`${sub.cost}${sub.icon} ${billingTypes.daily}`}
          cardColor={sub.color}
          imageUrl={""}
          startDate={sub.startDate}
        />
      ))}
    </div>
  );
};
