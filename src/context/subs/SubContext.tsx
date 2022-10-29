import moment from "moment";
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

import { mapSubTypeToMomentType } from "app-constants";
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
  // const createSubs: Subscription[] = Object.keys(cardColors).map((color: any) => {
  //   return {
  //     id: `${color}`,
  //     title: `${color}`,
  //     category: "Streaming",
  //     color,
  //     active: true,
  //     billingType: "monthly",
  //     currency: "EUR",
  //     allCosts: generateAllCosts(10, "monthly"),
  //     nextPaymentDate: moment().add(1, mapSubTypeToMomentType("monthly")).unix(),
  //     cost: 10,
  //   };
  // });

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
      nextPaymentDate: moment()
        .subtract(28, "days")
        .add(1, mapSubTypeToMomentType("monthly"))
        .unix(),
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
    {
      id: "4",
      title: "Apple Music",
      category: "Music",
      color: "gray",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(10, "monthly"),
      nextPaymentDate: moment().add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 10,
    },
    {
      id: "5",
      title: "Amazon Prime",
      category: "Streaming",
      color: "gray",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(10, "monthly"),
      nextPaymentDate: moment().add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 10,
    },
    {
      id: "6",
      title: "HBO",
      category: "Streaming",
      color: "orange",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(10, "monthly"),
      nextPaymentDate: moment().add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 10,
    },
    {
      id: "7",
      title: "Youtube Premium",
      category: "Streaming",
      color: "white",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(10, "monthly"),
      nextPaymentDate: moment().add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 10,
    },
    {
      id: "8",
      title: "Apple Arcade",
      category: "Gaming",
      color: "pink",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(10, "monthly"),
      nextPaymentDate: moment().add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 10,
    },
    {
      id: "9",
      title: "Twitch Prime",
      category: "Gaming",
      color: "gray",
      active: true,
      billingType: "monthly",
      currency: "EUR",
      allCosts: generateAllCosts(10, "monthly"),
      nextPaymentDate: moment().add(1, mapSubTypeToMomentType("monthly")).unix(),
      cost: 10,
    },
  ]);
  return <SubContext.Provider value={{ subs, setSubs }}>{children}</SubContext.Provider>;
};
