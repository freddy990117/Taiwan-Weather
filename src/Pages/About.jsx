import { React, useState, useContext } from "react";
import "../styles/about.css";
import { WeatherContext } from "../Context/WeatherContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUmbrella,
  faCloudSun,
  faSun,
  faCloud,
  faCloudRain,
  faBolt,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const weatherIconMap = {
    晴: faSun,
    晴時多雲: faCloudSun,
    多雲時晴: faCloudSun,
    多雲: faCloud,
    多雲時陰: faCloud,
    陰時多雲: faCloud,
    陰: faCloud,
    短暫陣雨: faCloudRain,
    多雲短暫陣雨: faCloudRain,
    陰短暫陣雨: faCloudRain,
    多雲時晴短暫陣雨: faCloudRain,
    晴午後短暫雷陣雨: faBolt,
    午後短暫雷陣雨: faBolt,
    雷雨: faBolt,
    大雷雨: faBolt,
    雷陣雨: faBolt,
    陰短暫雷陣雨: faBolt,
    多雲短暫雷陣雨: faBolt,
    陰時多雲短暫陣雨: faCloudRain,
    多雲時陰短暫陣雨: faCloudRain,
    多雲午後短暫雷陣雨: faBolt,
    多雲時陰午後雷陣雨: faBolt,
    陰午後短暫雷陣雨: faBolt,
    雨: faCloudShowersHeavy,
    大雨: faCloudShowersHeavy,
    豪雨: faCloudShowersHeavy,
    暴雨: faCloudShowersHeavy,
    陰陣雨或雷雨: faBolt,
    多雲陣雨或雷雨: faBolt,
    晴午後雷陣雨: faBolt,
    陰短暫雨: faCloudRain,
    多雲短暫雨: faCloudRain,
    晴時多雲午後短暫雷陣雨: faBolt,
    晴午後短暫雨: faCloudRain,
    陰時多雲午後雷陣雨: faBolt,
    多雲午後短暫陣雨: faCloudRain,
    陰午後短暫陣雨: faCloudRain,
    晴時多雲短暫陣雨: faCloudRain,
    default: faCloud,
  };
  const { data, selectCity } = useContext(WeatherContext); // 取得 API 資料
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
            {/* 如果沒有選擇城市，則顯示『空白』 */}
            {selectCity ? selectCity.city : ""}
          </span>
        </h1>
      </section>
      {/* 現在天氣 */}
      <section className="about now-weather">
        <h1>現在天氣</h1>
        <div className="about-weather">
          <div className="about-wind">
            <h2>天氣現象</h2>
            <FontAwesomeIcon
              className="icon"
              icon={
                selectCity
                  ? //「如果有對應的 icon 就顯示它，或顯示 Default
                    weatherIconMap[selectCity.isComfortable] ||
                    //這邊要設定顯示 Default 是為了讓返回的 key 不要是 undefined，不然會直接爆錯誤
                    weatherIconMap["default"]
                  : weatherIconMap["default"]
              }
            />
            <h3>{selectCity ? selectCity.isComfortable : ""}</h3>
          </div>
          <div className="about-temp">
            <h2>最高溫度</h2>
            <span className="info temp">
              <FontAwesomeIcon className="icon" icon={faCloudSun} />
            </span>
            <h1>{selectCity ? selectCity.maxTemp : ""}</h1>
          </div>
          <div className="about-rain">
            <h2>降雨機率</h2>
            <span className="info rain">
              <FontAwesomeIcon className="icon" icon={faUmbrella} />
            </span>
            <h1>{selectCity ? selectCity.isRain : ""}</h1>
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
