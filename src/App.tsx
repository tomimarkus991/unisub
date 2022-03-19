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
    <div className="min-w-full min-h-screen bg-slate-50 dark:bg-slate-800 flex justify-center">
      <div className="pt-24 flex flex-col space-y-5 w-80">
        <AddSubscriptionModal />
        <ColorModeButton />
      </div>
    </div>
  );
};
