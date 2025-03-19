// 這邊放 link footer outlet
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import City from "./Components/City";

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
