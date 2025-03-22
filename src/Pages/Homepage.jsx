import React, { useEffect, useState } from "react";
import "../styles/style.css";
import axios from "axios";
const APIKey = import.meta.env.VITE_API_KEY;
import City from "../Components/City";
const Homepage = () => {
  // data 用於存取 API 的資料
  const [data, setData] = useState([]);
  // isOpen 用於檢查表單是否開啟
  const [isOpen, setIsOpen] = useState(false);
  // selectCity 用於追蹤點選的 cityComponent 是哪一個，預設值是 null
  const [selectCity, setSelectCity] = useState(null);

  // Render 後執行
  useEffect(() => {
    async function fetchAPI() {
      const API = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${APIKey}`;
      // 取得 API
      let result = await axios.get(API);
      // 取得 API Data
      const location = result.data.records.location;

      const newData = location.map((cityData) => ({
        city: cityData.locationName,
        startTime: cityData.weatherElement[0].time[0].startTime,
        endTime: cityData.weatherElement[0].time[0].endTime,
        isRain:
          cityData.weatherElement[1].time[0].parameter.parameterName + "%",
        minTemp:
          cityData.weatherElement[2].time[0].parameter.parameterName + "°C",
        isComfortable:
          cityData.weatherElement[3].time[0].parameter.parameterName,
        maxTemp:
          cityData.weatherElement[4].time[0].parameter.parameterName + "°C",
      }));

      // 將 newData 的資料放入 Data
      setData(newData); // 更新狀態
    }
    fetchAPI();
    // 未設定 dependency，只會在初次 Render 後加載
  }, []);

  return (
    <div>
      <section className="homepageImage">
        <img src="../images/Taiwan.jpg" alt="Taiwan Mountain" />
        {/* <figcaption>Alishan Ｍountain</figcaption> */}
        <h1>全台天氣概況</h1>
        <div className="cityDown">
          {/* 點選查看是否已開啟 */}
          <button className="city-btn" onClick={() => setIsOpen(!isOpen)}>
            選擇城市
          </button>
          {/* 透過 Logical AND 條件來比對，如果 isOpen 是 true，顯示 city-meun 表單*/}
          {isOpen && (
            // 如果沒有開啟，就加入 className show，開啟則移除
            <ul className={`city-menu ${isOpen ? "show" : ""}`}>
              {/* 顯示 API 內的城市 */}
              {data.map((weather, index) => (
                <li key={index} id={index}>
                  <a
                    // 透過 id 來決定要跳到哪一個城市 (Key 給 React 識別)
                    href={`#${index}`}
                    onClick={() => {
                      // 點選該縣市後將 isOpen 狀態更改為 false (關閉 city-menu表單)
                      setIsOpen(false);
                      // 透過 index 來決定重點提示的 cityComponent 是哪一個
                      setSelectCity(index);
                    }}
                  >
                    {weather.city}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      {/* 傳遞 Props (data 是 API Data, selectCity 是 重點表單的追蹤目標)*/}
      <City data={data} selectCity={selectCity} />
      {/* <button className="toUp">到最上方的按鍵</button> */}
    </div>
  );
};

export default Homepage;
