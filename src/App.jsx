import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer textType="welcome" />
      <ItemListContainer textType="offers" />
      <ItemListContainer textType="products" />
    </div>
  );
}

export default App;
