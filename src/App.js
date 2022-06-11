import "./App.css";

import { Routes, Route } from "react-router-dom";

import "./catogories.styles.css";

//Context
import { ColorModeContextProvider } from "./contexts/ColorModeContext";

//Components
import Navigation from "./components/navigation/navigation.component";
import DarkLightModeBtn from "./components/PramodizeUIComponents/Buttons/DarkLightModeBtn/DarkLightModeBtn";
import Directory from "./pages/directory/directory.component";
import Authentication from "./pages/authentication/authentication.component";
import Shop from "./pages/shop/shop.component";
import Checkout from "./pages/checkout/checkout.component";

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
          <Route path="auth" element={<Authentication />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="women" element={<Women />}></Route>
          <Route path="men" element={<men />}></Route>
          <Route path="kids" element={<kids />}></Route>
          <Route path="denim" element={<denim />}></Route>
          <Route path="sale" element={<sale />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
    </ColorModeContextProvider>
  );
}

export default App;
