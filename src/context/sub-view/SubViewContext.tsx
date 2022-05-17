import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type ProviderProps = {
  children: React.ReactNode;
};

type SubView = "grid" | "table";

type InitialContextType = {
  subView: SubView;
  setSubView: Dispatch<SetStateAction<SubView>>;
};

const initContextData: InitialContextType = {
  subView: "grid",
  setSubView: () => {},
};

const SubViewContext = createContext(initContextData);

export const useSubView = () => useContext(SubViewContext);

export const SubViewProvider = ({ children }: ProviderProps) => {
  const [subView, setSubView] = useState<SubView>("grid");

  return (
    <SubViewContext.Provider value={{ subView, setSubView }}>{children}</SubViewContext.Provider>
  );
};
