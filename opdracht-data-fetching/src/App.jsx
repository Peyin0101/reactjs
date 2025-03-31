import { useState } from "react";
import { SearchForm } from "./SearchForm";
import { SearchResults } from "./SearchResults";
import { UseProductSearch } from "./useProductSearch";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const { products, loading, error } = UseProductSearch(searchTerm);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Product Zoeken</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults
        products={products}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;
