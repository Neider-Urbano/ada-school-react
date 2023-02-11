import "./App.css";
import MainDiv from "./components/MainDiv.jsx";
import { lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Home = lazy(() => import("./components/HomePage"));
const AboutUs = lazy(() => import("./components/AboutUsPage"));
const TaskPage = lazy(() => import("./components/TareasPage"));

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="container mainTask d-block">
      <nav className="mt-3 mb-3 d-flex justify-content-between">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/" className="mr-3">
              Home
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/AboutUs" className="mr-3">
              AboutUs
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <Link to="/task">Tasks</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <div>
          <button onClick={toggleColorMode} style={{ outline: "none" }}>
            {colorMode === "light" ? (
              <MoonIcon boxSize={6} />
            ) : (
              <SunIcon boxSize={6} />
            )}
          </button>
        </div>
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
