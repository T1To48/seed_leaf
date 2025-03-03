import { useCheckDeviceType } from "./customHooks";
import { BrowserRouter, Routes, Route } from "react-router";

import { SharedLayouts } from "./layouts";
import { Home, Store, ProductPage } from "./pages";
function App() {
  useCheckDeviceType();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<Home />} />
          <Route path="/store/:category?"  >
            <Route index element={<Store/>} />
            <Route path="view-product/:productId" element={<ProductPage/>} />
          </Route>
          <Route path="/concept" element={<h1>CONCEPT</h1>} />
          <Route path="/gallery" element={<h1>GALLERY</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
