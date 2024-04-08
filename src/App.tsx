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
      <Suspense fallback={<p>Cargando...</p>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <MainDiv />
              </>
            }
          ></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/task" element={<TaskPage />}></Route>
          <Route path="/*" element={<p>Page Not Found</p>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
