import "./index.css";

import { LocalizationProvider } from "@mui/lab";
import AdapterMoment from "@mui/lab/AdapterMoment";
import AOS from "aos";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { SidebarProvider, SubModalProvider, SubProvider } from "context";
import { Router } from "routes";

import "aos/dist/aos.css";
import "simplebar/dist/simplebar.min.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

TimeAgo.addDefaultLocale(en);

AOS.init();

root.render(
  <StrictMode>
    <SidebarProvider>
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <SubModalProvider>
            <SubProvider>
              <Router />
            </SubProvider>
          </SubModalProvider>
        </LocalizationProvider>
      </BrowserRouter>
    </SidebarProvider>
  </StrictMode>
);
