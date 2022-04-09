import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "pages";

export const Router = () => {
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
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
