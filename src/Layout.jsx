// 這邊放 link footer outlet
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";

const Layout = () => {
  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
};

export default Layout;
