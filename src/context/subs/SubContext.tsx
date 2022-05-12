import moment from "moment";
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

import { cardColors, mapSubTypeToMomentType } from "app-constants";
import { Subscription } from "types";
import { generateAllCosts } from "utils";

type InitialContextType = {
  subs: Subscription[];
  setSubs: Dispatch<SetStateAction<Subscription[]>>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const initContextData: InitialContextType = {
  subs: [],
  setSubs: () => {},
};

const SubContext = createContext(initContextData);

export const useSub = () => useContext(SubContext);

export const SubProvider = ({ children }: ProviderProps) => {
  const createSubs: Subscription[] = Object.keys(cardColors).map((color: any) => {
    return {
      id: `${color}`,
      title: `${color}`,
      category: "Streaming",
      color,
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(10, "monthly"),
      nextPaymentDate: moment().add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 10,
    };
  });

  const [subs, setSubs] = useState<Subscription[]>([
    {
      id: "1",
      title: "Very very super long named sub",
      category: "Streaming",
      color: "darkBlue",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(10, "monthly"),
      nextPaymentDate: moment()
        .subtract(5, "days")
        .add(1, mapSubTypeToMomentType("monthly"))
        .unix(),
      cost: 10,
    },
    {
      id: "2",
      title: "Disney+",
      category: "Streaming",
      color: "darkBlue",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(10, "monthly"),
      nextPaymentDate: moment()
        .subtract(28, "days")
        .add(1, mapSubTypeToMomentType("monthly"))
        .unix(),
      cost: 10,
    },
    {
      id: "3",
      title: "Netflix",
      category: "Streaming",
      color: "red",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(15, "monthly"),
      nextPaymentDate: moment()
        .subtract(1, "month")
        .add(1, mapSubTypeToMomentType("monthly"))
        .unix(),
      cost: 15,
    },
    {
      id: "3",
      title: "Spotify",
      category: "Music",
      color: "green",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(12, "monthly"),
      nextPaymentDate: moment().add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 12,
    },
    ...createSubs,
  ]);
  return <SubContext.Provider value={{ subs, setSubs }}>{children}</SubContext.Provider>;
};
