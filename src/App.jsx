import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import Map from "./components/Map/Map";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Background colorStops={["#FF0000", "#000000", "#FF0000"]} speed={0.8} />
      <main className="flex flex-col items-center justify-between w-full">
      <Outlet />
      <Map />
      </main>
      <Footer />
    </>
  );
}

export default App;
