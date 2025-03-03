import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Background from "./components/Background/Background";

function LoadingSpinner() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex justify-center items-center z-50">
      <div className="w-24 h-24 border-8 border-t-8 border-white border-solid rounded-full animate-spin"></div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();  

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timeout); 
  }, [location]);

  return (
    <>
      <Header />
      <Background colorStops={["#6C0000", "#000000", "#6C0000"]} speed={0.8} amplitude={1.0} />
      <main className="w-full flex flex-col items-center justify-between min-h-screen">
        {loading ? (
          <LoadingSpinner />  
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
