import React from 'react';
import { useParams } from 'react-router-dom';

const BookList = () => {
  const { genre } = useParams();

  // Define books for each genre
  const booksByGenre = {
    Fiction: ['Book Title 1', 'Book Title 2', 'Book Title 3'],
    Nonfiction: ['Book Title 4', 'Book Title 5', 'Book Title 6'],
    Religion: ['Book Title 7', 'Book Title 8', 'Book Title 9'],
  };

  // Log the genre and booksByGenre
  console.log('Selected genre:', genre);
  console.log('Books for genre:', booksByGenre[genre]);

  // Check if genre exists in booksByGenre, otherwise use an empty array
  const books = booksByGenre[genre] || [];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Daftar Buku {genre}</h1>
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{genre}</h2>
        {books.length > 0 ? (
          <ul className="list-none p-0">
            {books.map((title, index) => (
              <li key={index} className="py-2 border-b border-gray-300 last:border-b-0">
                {title}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No books available for this genre.</p>
        )}
      </div>
    </div>
  );
};

export default BookList;
