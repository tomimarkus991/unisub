import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type InitialContextType = {
  isChooseSubModalOpen: boolean;
  setIsChooseSubModalOpen: Dispatch<SetStateAction<boolean>>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const initContextData: InitialContextType = {
  isChooseSubModalOpen: false,
  setIsChooseSubModalOpen: () => {},
};

const SubModalContext = createContext(initContextData);

export const useSubModal = () => useContext(SubModalContext);

export const SubModalProvider = ({ children }: ProviderProps) => {
  const [isChooseSubModalOpen, setIsChooseSubModalOpen] = useState(false);
  return (
    <SubModalContext.Provider value={{ isChooseSubModalOpen, setIsChooseSubModalOpen }}>
      {children}
    </SubModalContext.Provider>
  );
};
