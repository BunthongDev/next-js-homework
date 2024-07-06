import Band from "../app/component/Band";



const Home = () => {
  const bands = {
    name: "One Direction",
    info: "One Direction, often shortened to 1D, are an English-Irish pop boy band formed in London in 2010. The group is composed of Niall Horan, Liam Payne, Harry Styles, Louis Tomlinson, and, until 2015, Zayn Malik. They became one of the best-selling boy groups of all time before going on an indefinite hiatus in 2016.",
    members: [
      "Harry Styles, ",
      "Liam Payne, ",
      "Louis Tomlinson, ",
      "Niall Horan, ",
      "Zayn Malik",
    ],
    albumNames: "Made in the A.M.",
    albumCovers:
      " Display image here",
  };
  

  return (
    <main className="flex flex-col items-center justify-between p-5 ">
        <h1 className="text-5xl font-bold text-center mb-5">My Favorite Band</h1>
       {/* The line code below display the same as <Band {...bands} />
       <Band name={bands.name} info={bands.info} members={bands.members} albumNames={bands.albumNames} albumCovers={bands.albumCovers} />  */}
       
       <Band {...bands} />

       
    </main>

  );
};


export default Home;