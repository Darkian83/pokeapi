import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./utils.css";
import HomePage from "./pages/HomePage";
import PokedexPages from "./pages/PokedexPages";
import PokedexIdPage from "./pages/PokedexIdPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";

function App() {
  return (
    <div className="page-container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<PokedexPages />} />
          <Route path="/pokedex/:id" element={<PokedexIdPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
