import "./css/App.module.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/charts/styles.css";
import { MantineProvider } from "@mantine/core";
import Footer from "./components/utility/Footer";
import { useContext, useEffect } from "react";
import { userContext } from "./contexts/UserContext";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./pages/About"));
const MoreInfo = lazy(() => import("./pages/MoreInfo"));
const Lessons = lazy(() => import("./pages/Lessons"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const { userContextGetUser } = useContext(userContext);
  useEffect(() => {
    userContextGetUser();
  }, []);
  return (
    <>
      <MantineProvider>
        <NavBar />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/more" element={<MoreInfo />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
