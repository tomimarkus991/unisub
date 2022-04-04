import { useEffect } from "react";

import { ToggleViewButton, NavbarTop, NavbarBottom, Sidebar } from "components/elements";
import { SubLayout } from "components/layouts";

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
    <>
      <div className="flex justify-center min-w-full min-h-screen bg-slate-50 dark:bg-slate-800">
        <div className="grid grid-cols-1 grid-rows-[17] w-full">
          <div className="flex sticky top-0 z-10 items-center w-full h-16 bg-slate-50">
            <NavbarTop user={{ id: "1", username: "Galaxy", email: "g@g.com", avatar: null }} />
          </div>
          <div className="hidden row-span-1 items-center sm:flex ">
            <ToggleViewButton />
          </div>
          <div className="overflow-auto row-span-12">
            <SubLayout />
          </div>
          <div className="flex sticky bottom-2 z-40 items-center m-2 w-[95%] h-20 bg-slate-50 rounded-md shadow-2xl">
            <NavbarBottom />
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};
