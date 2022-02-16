import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Routes from "./Routers/Routes";
import { CartProvider } from "../src/context/CartContex";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Routes />
      </CartProvider>
    </div>
  );
}

export default App;
