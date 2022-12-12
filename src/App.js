import React from "react";
// import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-[100vw]">
      <Banner />
      <Header />
      <Sidebar />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
