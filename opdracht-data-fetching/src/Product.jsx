export function Product({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-32 object-cover rounded"
      />
      <h3 className="font-bold mt-2">{product.title}</h3>
      <p className="text-gray-600">Brand: {product.brand}</p>
      <p className="text-gray-600">Price: {product.price}€</p>
      <p className="text-gray-600">Rating: {product.rating}/5</p>
    </div>
  );
}
