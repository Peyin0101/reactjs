function ProductItem({ product }) {
  return (
    <div
      className={`product-item ${product.stock > 0 ? "in-stock" : "no-stock"}`}
    >
      <h2 className="product-title"> {product.title} </h2>
      <p className="product-price">Price: €{product.price}</p>
      <p
        className={`product-stock ${
          product.stock > 0 ? "in-stock" : "no-stock"
        }`}
      >
        {product.stock > 0 ? "In stock" : "Out of stock"}
      </p>
    </div>
  );
}

export default ProductItem;
