import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetBookByIdQuery, useBorrowBookMutation } from "../features/book/bookApi";

const BorrowBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const { data: book, isLoading } = useGetBookByIdQuery(bookId);
  const [borrowBook] = useBorrowBookMutation();

  const [formData, setFormData] = useState({
    quantity: 1,
    dueDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (book && formData.quantity > book.copies) {
      alert("❌ Quantity exceeds available copies!");
      return;
    }
    await borrowBook({ bookId, ...formData });
    navigate("/borrow-summary");
  };

  if (isLoading) return <p className="text-center mt-10">Loading book...</p>;

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-xl font-bold mb-6 text-center">📖 Borrow Book</h2>
      <p className="mb-4 text-center">Title: <strong>{book?.title}</strong></p>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <input
          type="number"
          name="quantity"
          min={1}
          max={book?.copies}
          value={formData.quantity}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
          placeholder="Quantity"
        />
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Borrow
        </button>
      </form>
    </div>
  );
};

export default BorrowBook;
