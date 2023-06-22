import "./App.css";
import Home from "./sections/Home";
import Contact from "./sections/Contacts";
import Products from "./sections/Products";
import About from "./sections/About";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
 
      <Routes>
        <>
          <Route path="/cavaoseca" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<Route404/>} /> */}
        </>
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
