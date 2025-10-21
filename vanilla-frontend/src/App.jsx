import { Outlet } from "react-router-dom";
import Searchbar from "./components/Common/Searchbar";
import Navbar from "./components/Common/Navbar";
import { SearchProvider } from "./contexts/SearchContext";
import "./App.css";

function App() {
  return (
      <SearchProvider>
        <Searchbar />
        <main className="main-content">
          <Outlet />
        </main>
        <Navbar />
      </SearchProvider>
  );
}

export default App;
