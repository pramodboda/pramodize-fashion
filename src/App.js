import "./App.css";

import { Routes, Route } from "react-router-dom";

import "./catogories.styles.css";

//Context
import { ColorModeContextProvider } from "./contexts/ColorModeContext";

//Components

import Navigation from "./components/navigation/navigation.component";
import DarkLightModeBtn from "./components/buttons/DarkLightModeBtn/DarkLightModeBtn";
import Directory from "./components/pages/directory/directory.component";
import SignIn from "./pages/sign-in/sign-in.component";

const Women = () => {
  return <div>Women Page</div>;
};

function App() {
  return (
    <ColorModeContextProvider>
      <DarkLightModeBtn />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Directory />}></Route>
          <Route path="sign-in" element={<SignIn />}></Route>
          <Route path="women" element={<Women />}></Route>
          <Route path="men" element={<men />}></Route>
          <Route path="kids" element={<kids />}></Route>
          <Route path="denim" element={<denim />}></Route>
          <Route path="sale" element={<sale />}></Route>
        </Route>
      </Routes>
    </ColorModeContextProvider>
  );
}

export default App;
