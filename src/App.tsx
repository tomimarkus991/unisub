import { useEffect } from "react";

import { ColorModeButton, AddSubscriptionModal } from "components/elements";

export const App = () => {
  const root = document.documentElement;
  useEffect(() => {
    if (localStorage.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex justify-center min-w-full min-h-screen bg-slate-50 dark:bg-slate-800">
      <div className="flex flex-col pt-24 space-y-5 w-80">
        <AddSubscriptionModal />
        <ColorModeButton />
      </div>
    </div>
  );
};
