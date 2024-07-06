import React from 'react';


type Review = {
  reviewer: string;
  comment: string;
};

type BookProps = {
  title: string;
  author: string;
  genre: string;
  year: number;
  currency: string;
  price: number;
  pages: number;
  reviews: Review[];
};

// this is component for book that will be displayed on the page
// it takes all the props from the Book.tsx file

const Book: React.FC<BookProps> = ({ title, author, genre, year, price, pages, reviews,  currency }) => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-yellow-500 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <h2 className="text-xl mb-2">by {author}</h2>
      <p className="text-gray-700 mb-2"><strong>Genre:</strong> {genre}</p>
      <p className="text-gray-700 mb-4"><strong>Year:</strong> {year}</p>
      <p className="text-gray-700 mb-4 "><strong>Price:</strong> {price}{currency}</p>
      <p className="text-gray-700 mb-4"><strong>Pages:</strong> {pages}</p>

      <h3 className="text-lg font-semibold mb-2">Reviews:</h3>
      <ul className="list-disc ml-[20px]">
        {reviews.map((review, index) => (
          <li key={index}>
            <p className="text-gray-700"><strong>{review.reviewer}:</strong> {review.comment}</p>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Book;
