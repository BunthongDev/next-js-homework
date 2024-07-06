
import Book from '../app/components/Book';

const Home = () => {
  const book = {
    title: "Coding Life",
    author: "WingBook Publisher",
    genre: "Premium",
    year: 2023,
    price: 15,
    currency: "$",
    pages: 235,
    reviews: [
      { reviewer: "Virak", comment: "This book really good to read." },
      { reviewer: "Manfa", comment: "The Best Book of all time." },
      { reviewer: "Nita", comment: "Highly recommend this book." },
      { reviewer: "Haru", comment: "I have read this book more than 5 times and it worth reading." },
    { reviewer: "Sara", comment: "Best book ever." },
    { reviewer: "Sopheak", comment: "Highly recommend this book." },

    ],
  };

  return (
    <div className="mx-[20px]">
        <h1 className="text-4xl font-bold text-center mt-[20px] bg-yellow-300 p-2 rounded-lg">My Favorite Book</h1>
      <main>
        <Book {...book} />
      </main>
    </div>
  );
};

export default Home;
