import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import EmailJS from "./components/EmailJS/Email";

function App() {
  return (
    
      
      <EmailJS />

=======
import { Outlet } from 'react-router-dom';
import Container from "./components/Container/Container";
import Fetch from "./components/Fetch/Fetch";

function App() {
  return (
    <>
      <Header />
      <Background colorStops={["#FF0000", "#000000", "#FF0000"]} speed={0.8} />
      <Outlet />
      <Container />
      <Fetch />
      <Footer />
    </>
>>>>>>> origin/data
  );
}

export default App;
