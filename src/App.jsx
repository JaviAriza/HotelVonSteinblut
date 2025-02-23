import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import { Outlet } from 'react-router-dom';
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Main />
    </>
  );
}

export default App;
