import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import { Outlet } from 'react-router-dom';
import Container from "./components/Container/Container";
import Fetch from "./components/Fetch/fetch";
import Rooms from "./components/Rooms/rooms";

function App() {
  return (
    <>
      <Header />
      <Background colorStops={["#6C0000", "#000000", "#6C0000"]} speed={0.8} amplitude={1.0}/>
      <Outlet />
      <Container />
      <Footer />
    </>
  );
}

export default App;
