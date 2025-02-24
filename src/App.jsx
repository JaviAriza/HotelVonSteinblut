import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import { Outlet } from 'react-router-dom';
import Container from "./components/Container/Container";
import Cards from "./components/Card/Card";
import Card from "./components/Card/Card";
import CardInfo from "./components/CardInfo/CardInfo";

function App() {
  return (
    <>
   <CardInfo />
    </>
  );
}

export default App;
