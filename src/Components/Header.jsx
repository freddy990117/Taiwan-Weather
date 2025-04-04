import { React, useContext, useState } from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import { WeatherContext } from "../Context/WeatherContext";
const Header = () => {
  const { data, firstElements, setSelectCity } = useContext(WeatherContext); // 取得 API 資料
  // const firstElements = data.map((element) => element[0]); // 指取第一陣列的資訊
  const [isOpen, setIsOpen] = useState(false);
  // console.log(data);
  return (
    <div className="headerNav">
      <h1>Taiwan Weather</h1>
      <p>
        <Link to="/">全台天氣概況</Link>
      </p>
      <p>
        <Link
          to="/about"
          onClick={(e) => {
            // e.preventDefault(); // 防止跳到 About Page
            setIsOpen(!isOpen); // 如果狀態是 Open 切換回 不 Open
          }}
        >
          全台天氣預測 ▽
        </Link>
      </p>

      {/* 設定開啟與隱藏表單 */}
      {isOpen && (
        <ul className={`nav-down ${isOpen ? "show" : ""}`}>
          {firstElements.map((weather, index) => (
            <li
              key={index}
              id={index}
              onClick={() => {
                setIsOpen(false);
                setSelectCity(weather);
              }}
            >
              {weather.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
