import { useEffect, useState } from "react";

function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://dummyjson.com/recipes")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setRecipes(data.recipes);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/recipes");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      }
    }
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-bold">Recepten laden...</p>
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <h1 className="text-4xl font-bold mb-10">Onze Recepten</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-4/5">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{recipe.name}</h2>
            <p className="text-sm text-gray-500 mb-4 border-b border-gray-300 pb-4">
              {recipe.ingredients.join(", ")}
            </p>
            <ul className="text-gray-600 mb-4 list-disc pl-4">
              {recipe.instructions.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipesPage;
