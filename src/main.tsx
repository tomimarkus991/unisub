import "./index.css";

import { LocalizationProvider } from "@mui/lab";
import AdapterMoment from "@mui/lab/AdapterMoment";
import AOS from "aos";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { SidebarProvider, SubModalProvider, SubProvider } from "context";
import { Router } from "routes";

import "aos/dist/aos.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

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
