// components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        
        {/* Logo and Project Name */}
        <div>
          <h1 className="text-2xl font-bold text-white">📚 LibraryHub</h1>
          <p className="text-sm mt-2">
            A complete book management system for managing borrowing, returns and library data.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/books" className="hover:underline">All Books</a></li>
            <li><a href="/create-book" className="hover:underline">Add Book</a></li>
            <li><a href="/borrow-summary" className="hover:underline">Borrow Summary</a></li>
          </ul>
        </div>

        {/* Contact / About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
          <p className="text-sm">📧 libraryhub@example.com</p>
          <p className="text-sm">📍 Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-sm py-4">
        &copy; {new Date().getFullYear()} LibraryHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
