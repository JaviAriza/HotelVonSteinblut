import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import { Outlet } from 'react-router-dom';
import Container from "./components/Container/Container";
import SignIn from "./components/SignIn/SignIn";

function App() {
  return (
    <>
      <Header />
      <SignIn />
      
    </>
  );
}

export default App;
