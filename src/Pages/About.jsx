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
import imgSrc from "../Context/image";
import { BarChart, LineChart } from "../Components/Chart";

const About = () => {
  const { data, selectCity } = useContext(WeatherContext); // 取得 API 資料

  // 天氣現象資訊
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
  // 存放被選擇城市的資料
  const selectData = [];
  // 遍佈 data 找到被選擇的城市資訊
  data.forEach((city) => {
    city.forEach((result) => {
      // 使用 Optional Chaining（選擇性鏈接）來判斷是否有選擇 City，如果沒有，則回覆 null or undefined
      if (result.city === selectCity?.city) {
        // 將結果新增到 selectData 內
        selectData.push(result);
      }
    });
  });
  const labels = ["週一", "週二", "週三", "週四", "週五", "週六", "週日"];
  const minTemp = [];
  const maxTemp = [];
  const rainData = [];

  const filteredData = selectData.filter((item) => {
    const startTime = new Date(item.startTime); // 轉換為 Date 物件
    return startTime.getHours() === 6; // 檢查是否為 06:00
  });

  console.log(filteredData);

  filteredData.forEach((data) => {
    minTemp.push(data.minTemp);
    maxTemp.push(data.maxTemp);
    rainData.push(data.isRain);
  });

  return (
    <div>
      <section className="about about-title">
        <div className="about-image">
          {selectCity && <img src={imgSrc[selectCity.city]}></img>}
        </div>
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
            <h1>{selectCity ? selectCity.maxTemp : ""}°C</h1>
          </div>
          <div className="about-rain">
            <h2>降雨機率</h2>
            <span className="info rain">
              <FontAwesomeIcon className="icon" icon={faUmbrella} />
            </span>
            <h1>{selectCity ? selectCity.isRain : ""}%</h1>
          </div>
        </div>
      </section>
      {/* 天氣預測 */}
      <section className="about future-weather">
        <h1>天氣預測</h1>
        <div className="weather-nav">
          {/* 如果 selectData 的長度大於 0，就執行後方 */}
          {selectData.length > 0 &&
            selectData.map((dailyWeather, index) => (
              <div className="weather-detail" key={index}>
                <div className="weather-date">
                  {/* 只取得日期與時間 */}
                  {dailyWeather.startTime.split("").slice(8, 10)}日
                  {dailyWeather.startTime.split("").slice(11, 13)}時
                </div>
                <div className="weather-cloud">
                  <FontAwesomeIcon
                    className="icon"
                    icon={
                      weatherIconMap[dailyWeather.isComfortable] ||
                      weatherIconMap["default"]
                    }
                  />
                  {dailyWeather.isComfortable}
                </div>
                <div className="weather-temp">
                  溫度：{dailyWeather.minTemp}°C - {dailyWeather.maxTemp}°C
                </div>
                <div className="weather-rain">
                  下雨機率：{dailyWeather.isRain}%
                </div>
              </div>
            ))}
        </div>
      </section>
      {/* 下雨機率 */}
      <section className="about future-rain">
        <h1>下雨機率預測</h1>
        <BarChart labels={labels} rainData={rainData} />
      </section>
      {/* 整週天氣 */}
      <section className="about future-temp">
        <h1>一週天氣預測</h1>
        <LineChart
          labels={labels}
          rainData={rainData}
          minTemp={minTemp}
          maxTemp={maxTemp}
        />
      </section>
    </div>
  );
};

export default About;
