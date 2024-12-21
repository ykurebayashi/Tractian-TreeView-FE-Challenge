import { createContext } from 'react';

type ContextType = {
    location: string;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
  };


export const MyContext = createContext<ContextType | undefined>(undefined);