// 這邊放 link footer outlet
import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Link to="/">Homepage</Link>
      <Footer />
    </div>
  );
};

export default Layout;
