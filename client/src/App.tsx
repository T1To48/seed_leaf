import { useCheckDeviceType } from "./customHooks";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import { SharedLayouts } from "./layouts";
import {
  Home,
  Store,
  ProductPage,
  Cart,
  Checkout,
  Register,
  Login,
  UserAccount,
} from "./pages";

const App = () => {
  useCheckDeviceType();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route path="/concept" element={<h1>CONCEPT</h1>} />
          <Route path="/gallery" element={<h1>GALLERY</h1>} />
          <Route index element={<Home />} />
          <Route path="/store/:category?">
            <Route index element={<Store />} />
            <Route path="view-product/:productId" element={<ProductPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/user">
            <Route
              index
              element={<Navigate to="/user/account/orders" replace />}
            />
            <Route
              path="account"
              element={<Navigate to="/user/account/orders" replace />}
            />
            <Route path="checkout" element={<Checkout />} />
            <Route path="account/:currentPage" element={<UserAccount />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
