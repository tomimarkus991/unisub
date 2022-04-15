import { LayoutSubscriptionCard } from "components/elements";
import { useSub } from "context";
import { createSubPrice } from "utils";

export const SubLayout = () => {
  const { subs } = useSub();

  return (
    <div className="grid overflow-auto gap-2 justify-center last:pb-24">
      {subs.map(sub => {
        return (
          <LayoutSubscriptionCard
            key={sub.id}
            title={sub.title}
            category={sub.category}
            price={createSubPrice(sub)}
            cardColor={sub.color}
            imageUrl={""}
            startDate={sub.startDate}
          />
        );
      })}
    </div>
  );
};
