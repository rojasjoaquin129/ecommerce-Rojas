import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Routes from "./Routers/Routes";
import { ToastContainer } from "react-toastify";
import { CartProvider } from "../src/context/CartContex";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes />
      </CartProvider>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
