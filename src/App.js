import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormInput } from "./Components/Form";
import { Item } from "./Components/Item";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container pt-5">
      <FormInput />
      <ToastContainer position="top-right" />
      <Item />
    </div>
  );
}

export default App;
