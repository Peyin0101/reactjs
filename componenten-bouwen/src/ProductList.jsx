import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <div>
      <ProductItem
        product={{
          title: "Idris Dildo",
          price: 666,
          stock: 69,
        }}
      />
      <ProductItem
        product={{
          title: "Gay Kruk",
          price: 1337,
          stock: 50,
        }}
      />
      <ProductItem
        product={{
          title: "Idris ButtPlug",
          price: 420,
          stock: 60,
        }}
      />
      <ProductItem
        product={{
          title: "Idris Sexy Pillow",
          price: 888,
          stock: 30,
        }}
      />
    </div>
  );
}

export default ProductList;
