// 這邊放 link footer outlet
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      {/* 因為 Router 的 index 是 Homepage，可以不用使用 Hompage 這個 Component */}
      {/* import Outlet 渲染 Page404 & about 路由 */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
