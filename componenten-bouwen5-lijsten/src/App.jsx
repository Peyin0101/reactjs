import Container from "./Container";
import ProductList from "./ProductList";

function App() {
  const productlijst = [
    {
      id: 1,
      title: "Idris Dildo",
      price: 666,
      stock: 69,
    },

    {
      id: 2,
      title: "Gay Kruk",
      price: 1337,
      stock: 0,
    },

    {
      id: 3,
      title: "Idris ButtPlug",
      price: 420,
      stock: 60,
    },

    {
      id: 4,
      title: "Idris Baby Dildo",
      price: 555,
      stock: 90,
    },

    {
      id: 5,
      title: "Idris Sexy Pillow",
      price: 888,
      stock: 0,
    },

    {
      id: 6,
      title: "Idris Superglijmiddel",
      price: 250,
      stock: 80,
    },
  ];

  const inStockProducts = productlijst.filter((product) => product.stock > 0);
  const outOfStockProducts = productlijst.filter(
    (product) => product.stock === 0
  );

  return (
    <Container>
      <h1>Producten</h1>
      <h2>Items in stock:</h2>
      <ProductList products={inStockProducts} />
      <h2>Items out of stock:</h2>
      <ProductList products={outOfStockProducts} />
    </Container>
  );
}

export default App;
