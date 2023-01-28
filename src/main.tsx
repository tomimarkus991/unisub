import "./index.css";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { SidebarProvider } from "@redlotus/ui";
import AOS from "aos";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { SubModalProvider, SubProvider, SubViewProvider } from "context";
import { Router } from "routes";

import "aos/dist/aos.css";
import "simplebar-react/dist/simplebar.min.css";
import "@redlotus/ui/dist/style.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

TimeAgo.addDefaultLocale(en);

AOS.init();

root.render(
  <StrictMode>
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <SidebarProvider>
          <SubViewProvider>
            <SubModalProvider>
              <SubProvider>
                <Router />
              </SubProvider>
            </SubModalProvider>
          </SubViewProvider>
        </SidebarProvider>
      </LocalizationProvider>
    </BrowserRouter>
  </StrictMode>
);
