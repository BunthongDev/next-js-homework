import React from "react";
import Image from "next/image";


type Ingredient = {
  name: string;
  quantity: string;
};

type RecipeProps = {
  title: string;
  ingredients: Ingredient[];
  steps: string[];
  photo: string;
};

const Recipe: React.FC<RecipeProps> = ({
  title,
  ingredients,
  steps,
  photo,
}) => {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-green-700 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      <img
        src={photo}
        alt={title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.quantity} {ingredient.name}
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mb-2">Steps</h2>
      <ol className="list-decimal list-inside space-y-2">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      <h2 className="text-2xl font-semibold mb-2 mt-2 bg-green-800 p-2 rounded-lg">Enjoy your meal!
        By this ingredient and steps 
        you can make your own recipe. Enjoy!
      </h2>
    </div>
  );
};

export default Recipe;
