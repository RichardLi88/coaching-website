import "./css/App.module.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MoreInfo from "./pages/MoreInfo";
import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";
import Inquire from "./pages/Inquire";
import Footer from "./components/Footer";
import LessonProvider from "./contexts/LessonContext";

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
        </Routes>
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
