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
  subs: [],
  setSubs: () => {},
};

const SubContext = createContext(initContextData);

export const useSub = () => useContext(SubContext);

export const SubProvider = ({ children }: ProviderProps) => {
  const [subs, setSubs] = useState<Subscription[]>([]);
  return <SubContext.Provider value={{ subs, setSubs }}>{children}</SubContext.Provider>;
};
