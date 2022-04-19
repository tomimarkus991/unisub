import { LayoutSubscriptionCard } from "components/elements";
import { useSub } from "context";

export const SubLayout = () => {
  const { subs } = useSub();

  return (
    <div className="flex overflow-auto flex-col justify-center last:pb-24">
      {subs.map(sub => {
        return (
          <LayoutSubscriptionCard
            key={sub.id}
            sub={sub}
            // category={sub.category}
            // price={createSubPrice(sub)}
            // cardColor={sub.color}
            // imageUrl={""}
            // startDate={sub.startDate}
          />
        );
      })}
    </div>
  );
};
