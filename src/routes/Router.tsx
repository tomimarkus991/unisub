import { useRegisterPWA, useThemeUtils } from "@redlotus/ui";
import { Route, Routes } from "react-router-dom";

import { routes } from ".";

export const Router = () => {
  useThemeUtils();
  useRegisterPWA();

  return (
    <Routes>
      {routes.map(({ to, element }) => (
        <Route key={to} path={to} element={element} />
      ))}
    </Routes>
  );
};
