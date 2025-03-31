import { Product } from "./Product";

export function SearchResults({ products, loading, error, searchTerm }) {
  if (loading) {
    return <p className="text-center text-gray-600">Gegevens laden...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!searchTerm.trim()) {
    return (
      <p className="text-center text-gray-600">
        Voer een zoekterm in om producten te vinden
      </p>
    );
  }

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-600">
        Geen producten gevonden voor "{searchTerm}"
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
