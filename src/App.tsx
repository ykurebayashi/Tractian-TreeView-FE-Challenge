import { MyContext } from "./globals/context";
import { useState } from "react";
import { Main } from "./pages/Main";

function App() {
  const [location, setLocation] = useState<string>("");

  return (
    <MyContext.Provider value={{ location, setLocation }}>
      <Main />
    </MyContext.Provider>
  );
}

export default App;
