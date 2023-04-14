import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { Routes, Route } from "react-router-dom";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import "./catogories.styles.css";

//Context
import { ColorModeContextProvider } from "./contexts/ColorModeContext";
// import { CategoriesProvider } from "./contexts/categories.context";

//Components
import Navigation from "./components/navigation/navigation.component";
import DarkLightModeBtn from "./components/PramodizeUIComponents/Buttons/DarkLightModeBtn/DarkLightModeBtn";
import Directory from "./pages/directory/directory.component";
import Authentication from "./pages/authentication/authentication.component";
import Shop from "./pages/shop/shop.component";
import Checkout from "./pages/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";

const Women = () => {
  return <div>Women Page</div>;
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  return (
    // <CategoriesProvider>
    <ColorModeContextProvider>
      <DarkLightModeBtn />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Directory />}></Route>
          <Route path="auth" element={<Authentication />}></Route>
          <Route path="shop/*" element={<Shop />}></Route>
          <Route path="women" element={<Women />}></Route>
          <Route path="men" element={<men />}></Route>
          <Route path="kids" element={<kids />}></Route>
          <Route path="denim" element={<denim />}></Route>
          <Route path="sale" element={<sale />}></Route>
          <Route path="checkout" element={<Checkout />}></Route>
        </Route>
      </Routes>
    </ColorModeContextProvider>
    // </CategoriesProvider>
  );
}

export default App;
