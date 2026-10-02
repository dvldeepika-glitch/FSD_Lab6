import ProductList from "./components/ProductList";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Product Store</h1>
        <p>React Props, State & Event Handling</p>
      </header>

      <main className="container">
        <h2>Product List</h2>

        <ProductList />
      </main>
    </div>
  );
}

export default App;