import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";

function App(){
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AppRouter/>
    </div>
  )
}

export default App;