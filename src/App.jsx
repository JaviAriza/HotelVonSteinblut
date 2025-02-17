import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <Header />
      <Background colorStops={["#FF0000", "#000000", "#FF0000"]} speed={0.8} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
