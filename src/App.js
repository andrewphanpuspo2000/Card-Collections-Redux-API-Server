import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormInput } from "./Components/Form";
import { Item } from "./Components/Item";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { Product } from "./Components/Product";
function App() {
  return (
    <div className="container pt-5">
      <div>
        <p>
          <a href="/product">Product</a>
        </p>
        <p>
          <a href="/">Home</a>
        </p>
      </div>
      <FormInput />
      <ToastContainer position="top-right" />
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Item />} />
      </Routes>
    </div>
  );
}

export default App;
