import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { GiRiceCooker } from "react-icons/gi";

const ProductPage = () => {
  const { id } = useParams();
  const { data } = useOutletContext();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const recipe = data.find((item) => item.id === Number(id));

  if (!recipe) return <h1>Recipe not found</h1>;

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-[#093A3E] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-3 text-[#093A3E] font-semibold">
          Cooking your recipe... 🍳
        </p>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto py-5">
      <h1 className="text-3xl font-bold flex gap-2 items-center">
        <GiRiceCooker /> {recipe.name}
      </h1>
      <div className="grid md:lg:grid-cols-2 sm:grid-cols-1 items-center">
        <div className="flex md:justify-center w-full md:items-center">
          <img
            src={recipe.image}
            alt=""
            className="my-4 lg:w-130 md:w-100 rounded-xl shadow-xl"
          />
        </div>

        <div className="flex flex-col justify-start w-full border-2 p-5 rounded-lg">
          <p>
            <b>Rating:</b> {recipe.rating}
          </p>
          <p>
            <b>Meal Type:</b> {recipe.mealType}
          </p>

          <h2 className="text-xl font-semibold mt-4">Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-4">Instructions:</h2>
          <ol>
            {recipe.instructions.map((step, i) => (
              <li key={i}> - {step}</li>
            ))}
          </ol>

          <p className="mt-4">
            <b>Prepration Time:</b> {recipe.prepTimeMinutes} min
          </p>
          <p>
            <b>Cooking Time:</b> {recipe.cookTimeMinutes} min
          </p>

          <p className="mt-4">
            <b>Servings:</b> {recipe.servings}
          </p>
          <p>
            <b>Cuisine:</b> {recipe.cuisine}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
