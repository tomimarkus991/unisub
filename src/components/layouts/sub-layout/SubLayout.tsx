import { cardColors } from "app-constants";

import { LayoutSubscriptionCard } from "./components";

export const SubLayout = () => {
  return (
    <div className="grid overflow-auto gap-4 justify-center last:pb-6 first:mt-6">
      {Object.keys(cardColors).map(color => (
        <LayoutSubscriptionCard
          key={color}
          title="Name"
          category="Category"
          price={`3€ per month`}
          cardColor={color as any}
          imageUrl={""}
          startDate={1649269718000}
        />
      ))}
    </div>
  );
};
