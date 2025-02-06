import "./css/App.module.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MoreInfo from "./pages/MoreInfo";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Inquire from "./pages/Inquire";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <MantineProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/more" element={<MoreInfo />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
