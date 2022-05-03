import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

type InitialContextType = {
  isChooseSubModalOpen: boolean;
  setIsChooseSubModalOpen: Dispatch<SetStateAction<boolean>>;
  isSubscriptionModalOpen: boolean;
  setIsSubscriptionModalOpen: Dispatch<SetStateAction<boolean>>;
};

type ProviderProps = {
  children: React.ReactNode;
};

const initContextData: InitialContextType = {
  isChooseSubModalOpen: false,
  setIsChooseSubModalOpen: () => {},
  isSubscriptionModalOpen: false,
  setIsSubscriptionModalOpen: () => {},
};

const SubModalContext = createContext(initContextData);

export const useSubModal = () => useContext(SubModalContext);

export const SubModalProvider = ({ children }: ProviderProps) => {
  const [isChooseSubModalOpen, setIsChooseSubModalOpen] = useState(false);
  const [isSubscriptionModalOpen, setIsSubscriptionModalOpen] = useState(false);

  return (
    <SubModalContext.Provider
      value={{
        isChooseSubModalOpen,
        setIsChooseSubModalOpen,
        isSubscriptionModalOpen,
        setIsSubscriptionModalOpen,
      }}
    >
      {children}
    </SubModalContext.Provider>
  );
};
