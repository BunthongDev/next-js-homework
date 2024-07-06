import Head from "next/head";
import Recipe from "../app/components/Recipe";

const Home = () => {
  const recipe = {
    title: "Spaghetti Carbonara",
    ingredients: [
      { name: "Spaghetti", quantity: "200g" },
      { name: "Pancetta", quantity: "100g" },
      { name: "Eggs", quantity: "2" },
      { name: "Parmesan cheese", quantity: "50g" },
      { name: "Black pepper", quantity: "2 taste" },
      { name: "Salt", quantity: "2 taste" },
    ],
    steps: [
      "Cook the spaghetti according to the package instructions.",
      "In a pan, cook the pancetta until crispy.",
      "Beat the eggs in a bowl, then mix in the grated Parmesan cheese.",
      "Drain the spaghetti and add it to the pan with the pancetta. Remove from heat.",
      "Quickly mix in the egg and cheese mixture, stirring continuously to create a creamy sauce.",
      "Season with salt and black pepper, then serve immediately.",
    ],
    photo: "/spaghetti.webp",
  };

  return (
    <div className="container mx-auto">
      <h1 className=" text-4xl font-bold mb-4 text-center mt-5">My Food Recipe</h1>
      <main>
        <Recipe {...recipe} />
      </main>
    </div>
  );
};

export default Home;
