import { mapSubTypeToMomentType } from "app-constants";

import moment from "moment";
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

import { Subscription } from "types";

type InitialContextType = {
  subs: Subscription[];
  setSubs: Dispatch<SetStateAction<Subscription[]>>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const initContextData: InitialContextType = {
  subs: [
    {
      id: "1",
      title: "Disney+",
      category: "Streaming",
      color: "darkBlue",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      startDate: moment(new Date()).unix(),
      nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 10,
    },
  ],
  setSubs: () => {},
};

const SubContext = createContext(initContextData);

export const useSub = () => useContext(SubContext);

export const SubProvider = ({ children }: ProviderProps) => {
  const [subs, setSubs] = useState<Subscription[]>([
    {
      id: "1",
      title: "Disney+",
      category: "Streaming",
      color: "darkBlue",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      startDate: moment(new Date()).unix(),
      nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 10,
    },
  ]);
  return <SubContext.Provider value={{ subs, setSubs }}>{children}</SubContext.Provider>;
};
