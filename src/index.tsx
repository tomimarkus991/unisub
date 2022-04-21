import "./index.css";

import { LocalizationProvider } from "@mui/lab";
import AdapterMoment from "@mui/lab/AdapterMoment";
import AOS from "aos";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { SidebarProvider, SubModalProvider, SubProvider } from "context";
import { Router } from "routes";

import "aos/dist/aos.css";

const root = createRoot(document.getElementById("root") as Element);

AOS.init();

root.render(
  <BrowserRouter>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <SidebarProvider>
        <SubModalProvider>
          <SubProvider>
            <Router />
          </SubProvider>
        </SubModalProvider>
      </SidebarProvider>
    </LocalizationProvider>
  </BrowserRouter>
);
