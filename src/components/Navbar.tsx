import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between">
      <h1 className="text-xl font-bold"> Library</h1>
      <div className="space-x-4">
        <Link to="/books" className="hover:underline">Books</Link>
        <Link to="/create-book" className="hover:underline">Add Book</Link>
        <Link to="/borrow-summary" className="hover:underline">Borrow Summary</Link>
      </div>
    </nav>
  );
};

export default Navbar;
