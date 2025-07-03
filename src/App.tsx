import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; 
import AppRouter from "./routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <AppRouter />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
