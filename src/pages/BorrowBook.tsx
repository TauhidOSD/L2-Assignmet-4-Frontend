import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  useGetBookByIdQuery,
  useBorrowBookMutation,
} from "../features/book/bookApi";
import toast from "react-hot-toast";  // <-- import করে নিচ্ছি

const BorrowBook = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { data: book, isLoading } = useGetBookByIdQuery(bookId || "");
  const [borrowBook] = useBorrowBookMutation();
  const [formData, setFormData] = useState({
    quantity: 1,
    dueDate: "",
  });

  if (!bookId) {
    return (
      <p className="text-center text-red-500 mt-10">
        Invalid Book ID. Please go back and try again.
      </p>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === "quantity" ? Number(value) : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.quantity > (book?.copies ?? 0)) {
      toast.error("Quantity exceeds available copies!");
      return;
    }

    try {
      await borrowBook({ bookId, ...formData }).unwrap();
      toast.success("Book borrowed successfully! 📚");
      navigate("/borrow-summary");
    } catch (error) {
      toast.error("Failed to borrow book.");
      console.error(error);
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading book...</p>;

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h2 className="text-xl font-bold mb-6 text-center">📖 Borrow Book</h2>
      <p className="mb-4 text-center">
        Title: <strong>{book?.title}</strong>
      </p>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white p-6 rounded shadow"
      >
        <div>
          <label htmlFor="quantity" className="block mb-1 font-medium">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            name="quantity"
            min={1}
            max={book?.copies}
            value={formData.quantity}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
            placeholder="Enter quantity"
          />
        </div>

        <div>
          <label htmlFor="dueDate" className="block mb-1 font-medium">
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
        </div>

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
