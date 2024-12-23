import { MyContext } from "./globals/context";
import { useState } from "react";
import { Main } from "./pages/Main";
import { NodeType } from "./components/TreeView/types";

function App() {
  const [location, setLocation] = useState<
    { id: string; name: string } | undefined
  >(undefined);
  const [filter, setFilter] = useState<
    "energy_sensor" | "critical_sensor" | undefined
  >(undefined);
  const [selectedAsset, setSelectedAsset] = useState<NodeType | undefined>(
    undefined
  );

  return (
    <MyContext.Provider
      value={{
        location,
        setLocation,
        filter,
        setFilter,
        selectedAsset,
        setSelectedAsset,
      }}
    >
      <Main />
    </MyContext.Provider>
  );
}

export default App;
