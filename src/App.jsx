import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Background
        colorStops={["#6C0000", "#000000", "#6C0000"]}
        speed={0.8}
        amplitude={1.0}
      />
      {/* 🔥 Asegúrate de que Outlet esté aquí y no dentro de otro div */}
      <Outlet />

      <Footer />
    </>
  );
}

export default App;