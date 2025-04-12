import { React, useContext, useState } from "react";
import "../styles/footer.css";
import { Link, useNavigate } from "react-router-dom";
import { WeatherContext } from "../Context/WeatherContext";
const Header = () => {
  const { data, firstElements, setSelectCity } = useContext(WeatherContext); // 取得 API 資料
  // const firstElements = data.map((element) => element[0]); // 指取第一陣列的資訊
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // 使用 useNavigate

  // 2.設定點擊的操作 （ Weather 會在 firstElements.map 中帶入 ）
  const handleCityClick = (weather) => {
    setSelectCity(weather); // 設定選擇的城市
    setIsOpen(false); // 關閉選單
    navigate("/about"); // 跳轉到 About 頁面
  };

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
            e.preventDefault(); // 1.點選表單城市會直接跳到 About 預設的介面，所以先設定防止跳到 About Page），後面再用 useNavigate 跳到 About Page
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
            // 3.新增點擊事件
            <li key={index} id={index} onClick={() => handleCityClick(weather)}>
              {weather.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
