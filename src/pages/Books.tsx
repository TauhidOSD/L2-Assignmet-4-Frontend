import { Link } from "react-router-dom";
import { useGetBooksQuery, type Book,  } from "../features/book/bookApi";

const Books = () => {
  const { data: books, isLoading, error } = useGetBooksQuery();

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error loading books</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">All Books</h1>

      <table className="min-w-full bg-white border">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border">Title</th>
            <th className="py-2 px-4 border">Author</th>
            <th className="py-2 px-4 border">Genre</th>
            <th className="py-2 px-4 border">ISBN</th>
            <th className="py-2 px-4 border">Copies</th>
            <th className="py-2 px-4 border">Available</th>
            <th className="py-2 px-4 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {books?.map((book: Book) => (
            <tr key={book._id}>
              <td className="py-2 px-4 border">{book.title}</td>
              <td className="py-2 px-4 border">{book.author}</td>
              <td className="py-2 px-4 border">{book.genre}</td>
              <td className="py-2 px-4 border">{book.isbn}</td>
              <td className="py-2 px-4 border">{book.copies}</td>
              <td className="py-2 px-4 border">{book.available ? "Available" : "Not Available"}</td>
              <td className="py-2 px-4 border space-x-2">
                <Link to={`/edit-book/${book._id}`} className="text-blue-600 hover:underline">
                  Edit
                </Link>
                <Link to={`/borrow/${book._id}`} className="text-green-600 hover:underline">
                  Borrow
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
