import { useForm } from "react-hook-form";

function BlogPostForm() {
  // Gebruik de useForm hook van React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Handler voor het versturen van het formulier
  const onSubmit = (data) => {
    console.log(data);
    alert(
      `Blogpost aangemaakt: \nTitel: ${data.title} \nCategorie: ${
        data.category
      } \nInhoud: ${data.content} \nPubliceer direct: ${
        data.publish ? "Ja" : "Nee"
      }`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          Blogpost Aanmaken
        </h1>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Titel:</label>
          <input
            type="text"
            {...register("title", { required: "De titel is verplicht." })}
            className={`border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } p-2 rounded-lg w-full`}
            placeholder="Titel van je blogpost"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Inhoud:
          </label>
          <textarea
            {...register("content", {
              required: "De inhoud is verplicht.",
              minLength: {
                value: 20,
                message: "De inhoud moet minimaal 20 karakters bevatten.",
              },
            })}
            className={`border  ${
              errors.content ? "border-red-500" : "border-gray-300"
            } p-2 rounded-lg w-full`}
            placeholder="Schrijf hier je blogpost"
          />
          {errors.content && (
            <p className="text-red-500 text-sm">errors.content.message</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Categorie:
          </label>
          <select
            {...register("category", { required: "Kies een categorie." })}
            className={`border ${
              errors.category ? "border-red-500" : "border-gray-300"
            }p-2 rounded-lg w-full`}
          >
            <option value="technology">Technologie</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="education">Onderwijs</option>
            <option value="health">Gezondheid</option>
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            <input type="checkbox" {...register("publish")} className="mr-2" />
            Publiceer direct
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 disabled:opacity-50 disabled:bg-gray-500 transition-colors duration-300"
        >
          Blogpost Aanmaken
        </button>
      </form>
    </div>
  );
}

export default BlogPostForm;
