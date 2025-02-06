import "./css/App.module.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Routes, Route, Outlet } from "react-router-dom";

import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import Footer from "./components/Footer";
import { useContext, useEffect } from "react";
import { userContext } from "./contexts/UserContext";

import { lazy, Suspense } from "react";

const About = lazy(() => import("./pages/About"));
const MoreInfo = lazy(() => import("./pages/MoreInfo"));
const Lessons = lazy(() => import("./pages/Lessons"));
const Inquire = lazy(() => import("./pages/Inquire"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
const Member = lazy(() => import("./pages/Member"));

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
            <Route path="/inquire" element={<Inquire />} />
            <Route path="/more" element={<MoreInfo />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/member" element={<Member />} />
          </Routes>
        </Suspense>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
