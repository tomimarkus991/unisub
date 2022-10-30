import { useThemeUtils } from "@redlotus/ui";
import { Route, Routes } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from "virtual:pwa-register/react";

import { routes } from ".";

export const Router = () => {
  useThemeUtils();
  const intervalMS = 60 * 60 * 1000;

  useRegisterSW({
    onRegistered(r) {
      r &&
        setInterval(() => {
          r.update();
        }, intervalMS);
    },
  });

  return (
    <Routes>
      {routes.map(({ to, element }) => (
        <Route key={to} path={to} element={element} />
      ))}
    </Routes>
  );
};
