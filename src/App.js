import React from "react";
import "./App.css";
import  {  Scrollbar  }  from  'react-scrollbars-custom' ; 
import Banner from "./components/Banner";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full dark:bg-slate-600 ">
      <Banner />
      <Header />
      <Sidebar />
      <Main /> 
      <Footer />
    </div>
  );
}

export default App;
