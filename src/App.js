import React from "react";
import Header from "./components/UI/Header/Header";
import "./style/App.css";
import Footer from "./components/UI/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
