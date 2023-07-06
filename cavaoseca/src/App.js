import "./App.css";
import Home from "./sections/Home";
import Contact from "./sections/Contacts";
import Products from "./sections/Products";
import ScrollToTop from "./components/ScrollToTop";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="*" element={<Route404/>} /> */}
        </>
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
