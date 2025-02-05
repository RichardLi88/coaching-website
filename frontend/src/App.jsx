import "./css/App.module.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Lessons from "./pages/Lessons";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import MoreInfo from "./pages/MoreInfo";
import "@mantine/core/styles.css";
import { AppShell, MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/more" element={<MoreInfo />} />
        </Routes>
      </MantineProvider>
    </>
  );
}

export default App;
