import { createContext } from 'react';

type ContextType = {
  location: {id: string, name:string} | undefined;
  setLocation: React.Dispatch<React.SetStateAction<{id: string, name:string} | undefined>>;
};


export const MyContext = createContext<ContextType | undefined>(undefined);