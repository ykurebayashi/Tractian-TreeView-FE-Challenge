import { createContext } from 'react';

type ContextType = {
  location: {id: string, name:string} | undefined;
  setLocation: React.Dispatch<React.SetStateAction<{id: string, name:string} | undefined>>;
  filter: 'energy_sensor' | 'critical_sensor' | undefined;
  setFilter: React.Dispatch<React.SetStateAction<'energy_sensor' | 'critical_sensor' | undefined>>;
};


export const MyContext = createContext<ContextType | undefined>(undefined);