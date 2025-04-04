import { React, useState, useContext } from "react";
import "../styles/about.css";
import { WeatherContext } from "../Context/WeatherContext";

const About = () => {
  const { data, firstElements, selectCity } = useContext(WeatherContext); // 取得 API 資料
  const [page, setPage] = useState(0);
  // 總共頁數是 2
  const maxPage = Math.floor(2);
  // 計算當前顯示的 3 個天氣資料
  const startIndex = page * 3;
  // 取出 3 個 weather-detail 來顯示
  const visibleData = data.slice(startIndex, startIndex + 3);
  return (
    <div>
      <section className="about about-image">
        <h1>
          <span className="city-name">
            {/* 如果沒有選擇城市，則顯示『請選擇城市』 */}
            {selectCity ? selectCity.city : "請選擇城市"}
          </span>
        </h1>
      </section>
      {/* 現在天氣 */}
      <section className="about now-weather">
        <h1>現在天氣</h1>
        <div className="about-weather">
          <div className="about-wind">
            <h2>天氣現象</h2>
            <span className="info wind">ICON</span>
          </div>
          <div className="about-temp">
            <h2>平均溫度</h2>
            <span className="info temp">ICON</span>
          </div>
          <div className="about-rain">
            <h2>降雨機率</h2>
            <span className="info rain">ICON</span>
          </div>
        </div>
      </section>
      {/* 天氣預測 */}
      <section className="about future-weather">
        <h1>天氣預測</h1>
        {/* 向左按鈕 */}
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          className="weather-btn left"
        >
          ←
        </button>
        <div className="weather-nav">
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
          <div className="weather-detail">
            <div className="weather-date">Date</div>
            <div className="weather-cloud">Weather</div>
            <div className="weather-temp">Temp</div>
            <div className="weather-rain">Rain %</div>
          </div>
        </div>

        {/* 向右按鈕 */}
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, maxPage - 1))}
          disabled={page >= maxPage - 1}
          className="weather-btn right"
        >
          →
        </button>
      </section>
      {/* 下雨機率 */}
      <section className="about future-rain">下雨機率預測</section>
      {/* 整週天氣 */}
      <section className="about future-temp">一週天氣預測</section>
    </div>
  );
};

export default About;
