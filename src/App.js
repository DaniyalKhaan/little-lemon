import React from "react";
// import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css"
import { Routes, Route } from "react-router-dom";

function App() {
  return (

    <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/nav" element={<Nav />} />

    </Routes>


    {/* <Header />
    <Main />
    <Footer /> */}
    
    </>

  );
}

export default App;
