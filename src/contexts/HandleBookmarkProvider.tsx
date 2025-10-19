import { createContext, useContext, ReactNode } from "react";

const HandleBookmarkContext = createContext<(() => void) | undefined>(undefined);

interface HandleBookmarkProviderProps {
  children: ReactNode;
  value: () => void;
}

export const HandleBookmarkProvider = ({ children, value }: HandleBookmarkProviderProps) => {
  return (
    <HandleBookmarkContext.Provider value={value}>
      {children}
    </HandleBookmarkContext.Provider>
  );
};

export const useHandleBookmark = () => {
  const context = useContext(HandleBookmarkContext);
  if (context === undefined) {
    throw new Error('useHandleBookmark must be used within a HandleBookmarkProvider');
  }
  return context;
};
