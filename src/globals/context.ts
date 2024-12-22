import { createContext } from 'react';
import { NodeType } from '../components/TreeView/types';
import { FilterType } from '../hooks/useGetTree';

type ContextType = {
  location: {id: string, name:string} | undefined;
  setLocation: React.Dispatch<React.SetStateAction<{id: string, name:string} | undefined>>;
  filter: FilterType| undefined;
  setFilter: React.Dispatch<React.SetStateAction<FilterType| undefined>>;
  selectedAsset: NodeType | undefined;
  setSelectedAsset: React.Dispatch<React.SetStateAction<NodeType | undefined>>;
};


export const MyContext = createContext<ContextType | undefined>(undefined);