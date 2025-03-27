import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import { WeatherProvider } from "./Context/WeatherContext"; // 引入 WeatherProvider

const Layout = () => {
  return (
    // Header Outlet Footer 就是 WeatherProvider 的 children
    <WeatherProvider>
      <Header />
      <Outlet />
      <Footer />
    </WeatherProvider>
  );
};

export default Layout;
