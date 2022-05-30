import "./App.css";

import "./catogories.styles.css";

//Context
import { ColorModeContextProvider } from "./contexts/ColorModeContext";

//Components
import DarkLightModeBtn from "./components/buttons/DarkLightModeBtn/DarkLightModeBtn";
import Directory from "./components/pages/directory/directory.component";

function App() {
  return (
    <ColorModeContextProvider>
      <div className="App">
        <DarkLightModeBtn />
        <Directory />
      </div>
    </ColorModeContextProvider>
  );
}

export default App;
