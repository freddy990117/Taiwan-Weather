import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headerNav">
      <h1>Taiwan Weather</h1>
      <p>
        <Link to="/">全台天氣概況</Link>
      </p>
      <p>
        <Link to="/about">全台天氣預測</Link>
      </p>
    </div>
  );
};

export default Header;
