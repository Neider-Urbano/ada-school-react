import "./App.css";
import MainDiv from "./components/MainDiv.jsx";
import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = lazy(() => import("./components/HomePage"));
const AboutUs = lazy(() => import("./components/AboutUsPage"));
const TaskPage = lazy(() => import("./components/TareasPage"));
function App() {
  return (
    <div className="container mainTask d-block">
      <nav className="mt-3 mb-3">
        <Link to="/" className="mr-3">
          Home
        </Link>
        <Link to="/AboutUs" className="mr-3">
          AboutUs
        </Link>
        <Link to="/task">Tareas</Link>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Cargando...</p>}>
              <Home />
              <MainDiv />
            </Suspense>
          }
        ></Route>
        <Route
          path="/aboutus"
          element={
            <Suspense fallback={<p>Cargando...</p>}>
              <AboutUs />
            </Suspense>
          }
        ></Route>
        <Route
          path="/task"
          element={
            <Suspense fallback={<p>Cargando...</p>}>
              <TaskPage />
            </Suspense>
          }
        ></Route>
        <Route
          path="/*"
          element={
            <Suspense fallback={<p>Cargando...</p>}>
              <p>Page Not Found</p>
            </Suspense>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
