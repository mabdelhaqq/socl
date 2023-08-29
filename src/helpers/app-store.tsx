import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  username: string;
  setUsername: (name: string) => void;
  role: string;
  setRole: (name: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState('');
  const [role, setRole] = useState('user');

  return (
    <AppContext.Provider value={{ username, setUsername, role, setRole }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error();
  }
  return context;
};