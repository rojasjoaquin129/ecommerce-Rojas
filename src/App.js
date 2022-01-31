import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/NavBar";
import Sliders from "./components/sliders/Sliders";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Sliders />
      <ItemListContainer />
    </div>
  );
}

export default App;
