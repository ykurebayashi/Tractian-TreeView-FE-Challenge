import { MyContext } from "./globals/context";
import { useState } from "react";
import { Main } from "./pages/Main";

function App() {
  const [location, setLocation] = useState<
    { id: string; name: string } | undefined
  >(undefined);
  const [filter, setFilter] = useState<
    "energy_sensor" | "critical_sensor" | undefined
  >(undefined);

  return (
    <MyContext.Provider value={{ location, setLocation, filter, setFilter }}>
      <Main />
    </MyContext.Provider>
  );
}

export default App;
