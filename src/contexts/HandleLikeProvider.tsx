import { createContext, useContext, ReactNode } from "react";

const HandleLikeContext = createContext<(() => void) | undefined>(undefined);

interface HandleLikeProviderProps {
  children: ReactNode;
  value: () => void;
}

export const HandleLikeProvider = ({ children, value }: HandleLikeProviderProps) => {
  return (
    <HandleLikeContext.Provider value={value}>
      {children}
    </HandleLikeContext.Provider>
  );
};

export const useHandleLike = () => {
  const context = useContext(HandleLikeContext);
  if (context === undefined) {
    throw new Error('useHandleLike must be used within a HandleLikeProvider');
  }
  return context;
};
