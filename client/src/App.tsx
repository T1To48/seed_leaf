import { useCheckDeviceType } from "./customHooks";
import { BrowserRouter, Routes, Route } from "react-router";

import { SharedLayouts } from "./layouts";
function App() {
  useCheckDeviceType();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<h1 style={{marginTop:"12rem"}}>HOME</h1>} />
          <Route path="/products" element={<h1>STORE</h1>} />
          <Route path="/concept" element={<h1>CONCEPT</h1>} />
          <Route path="/gallery" element={<h1>GALLERY</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
