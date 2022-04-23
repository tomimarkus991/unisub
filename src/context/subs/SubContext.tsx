import moment from "moment";
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

import { mapSubTypeToMomentType } from "app-constants";
import { Subscription } from "types";

import { generateAllCosts } from "../../utils";

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
      allCosts: generateAllCosts(10, "monthly"),
      startDate: moment(new Date()).unix(),
      nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 10,
    },
    {
      id: "2",
      title: "Netflix",
      category: "Streaming",
      color: "red",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(15, "monthly"),
      startDate: moment(new Date()).unix(),
      nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 15,
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
      allCosts: generateAllCosts(10, "monthly"),
      startDate: moment(new Date()).unix(),
      nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 10,
    },
    {
      id: "2",
      title: "Netflix",
      category: "Streaming",
      color: "red",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(15, "monthly"),
      startDate: moment(new Date()).unix(),
      nextPaymentDate: moment(new Date()).add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 15,
    },
  ]);
  return <SubContext.Provider value={{ subs, setSubs }}>{children}</SubContext.Provider>;
};
