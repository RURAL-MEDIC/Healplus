import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Searchbar from "./components/Searchbar";
import Navbar from "./components/Navbar";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  const [count, setCount] = useState(0);

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
