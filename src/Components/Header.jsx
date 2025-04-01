import { React, useContext, useState } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { WeatherContext } from "../Context/WeatherContext";
const Header = () => {
  const data = useContext(WeatherContext); // 取得 API 資料
  const firstElements = data.map((element) => element[0]); // 指取第一陣列的資訊
  const [isOpen, setIsOpen] = useState(false);

  console.log(data);
  return (
    <div className="headerNav">
      <h1>Taiwan Weather</h1>
      <p>
        <Link to="/">全台天氣概況</Link>
      </p>
      <p>
        <Link to="/about">全台天氣預測</Link>
        <div className="nav-down">
          {firstElements.map((weather, index) => (
            <li key={index} id={index}>
              {weather.city}
            </li>
          ))}
        </div>{" "}
      </p>
    </div>
  );
};

export default Header;
