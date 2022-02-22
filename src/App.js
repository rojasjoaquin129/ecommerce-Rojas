import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer/Footer";
import Routes from "./Routers/Routes";
import { CartProvider } from "../src/context/CartContex";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes />
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
