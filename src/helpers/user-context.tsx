import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

const UserContext = createContext<UserContextType | null>(null);

export const useUserContext = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error();
    }
    return context;
  };

interface Props {
    children: ReactNode;
  }
  interface UserContextType {
    username: string;
    setUsername: (username: string) => void;
  }

export const UserProvider = ({ children }:Props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedname = localStorage.getItem('username');
    if (storedname) {
      setUsername(storedname);
    }
  }, []);

  const updateUsername = (newUsername: string) => {
    setUsername(newUsername);
    localStorage.setItem('username', newUsername);
  };
  return (
    <UserContext.Provider value={{username, setUsername: updateUsername}}>
      {children}
    </UserContext.Provider>
  );
};

