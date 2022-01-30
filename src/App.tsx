import { useEffect } from "react";

import { Button, ColorModeButton } from "components/elements";
import i18n from "i18n";

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
    <div className="min-w-full min-h-screen bg-slate-50 dark:bg-slate-800">
      <div className="pt-24 flex flex-col space-y-5 w-80">
        <Button onClick={() => {}} variant="green" size="sm">
          Welcome
        </Button>
        <Button onClick={() => i18n.changeLanguage("est")} variant="green">
          to est
        </Button>
        <Button onClick={() => i18n.changeLanguage("en")} variant="green">
          to eng
        </Button>
        <ColorModeButton />
      </div>
    </div>
  );
};
