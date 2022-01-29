import { useEffect } from "react";

import { GreenButton, PrimaryButton, ColorModeButton } from "components/elements";

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
    <div className="m-auto max-w-max pt-24 flex flex-col space-y-5">
      <GreenButton>click me</GreenButton>
      <PrimaryButton>click me</PrimaryButton>
      <ColorModeButton />
    </div>
  );
};
