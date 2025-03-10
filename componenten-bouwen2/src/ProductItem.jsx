function ProductItem() {
  const product = {
    title: "Idris Dildo",
    price: 666,
    stock: 100,
  };
  return (
    <div className="product-item">
      <h2 className="product-title"> {product.title} </h2>
      <p className="product-price">Price: €{product.price}</p>
      <p className="product-stock">
        {product.stock > 0 ? "In stock" : "No stock"}
      </p>
    </div>
  );
}

export default ProductItem;
