import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const APIKey = import.meta.env.VITE_API_KEY;

// 建立一個全域狀態管理的 Context
export const WeatherContext = createContext();

// 建立 Weather's API Provider (WeatherProvider)
export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [selectCity, setSelectCity] = useState(null); // 設定選擇的城市

  useEffect(() => {
    async function fetchAPI() {
      // 一週的 API
      const API = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=${APIKey}`;
      let result = await axios.get(API);
      const location = result.data.records.Locations[0].Location;

      // 建立 fetchAPI 的區域變數 (newData)
      const newData = [];
      location.forEach((cityData) => {
        let lastValidRain = null;
        const cityWeather = [];
        for (let i = 0; i < cityData.WeatherElement[14].Time.length; i++) {
          // 取出原始值
          const rainRaw =
            cityData.WeatherElement[11].Time[i].ElementValue[0]
              .ProbabilityOfPrecipitation;

          let rainValue;

          if (rainRaw === "-") {
            // 如果目前是 "-", 嘗試用上一筆有的
            rainValue = lastValidRain ?? "--";
          } else {
            rainValue = parseInt(rainRaw);
            lastValidRain = rainValue; // ✅ 更新最近一次的有效值
          }
          lastValidRain = rainValue;

          cityWeather.push({
            // 取得「城市名稱」
            city: cityData.LocationName,
            // 取得「開始與結束時間」
            startTime: cityData.WeatherElement[14].Time[i].StartTime,
            endTime: cityData.WeatherElement[14].Time[i].EndTime,
            // 取得「降雨機率」
            isRain: rainValue ?? "--", // 如果還是 null，就顯示 "--"
            // 取得「最低溫」
            minTemp:
              cityData.WeatherElement[2].Time[i].ElementValue[0].MinTemperature,
            // 取得「最高溫」
            maxTemp:
              cityData.WeatherElement[1].Time[i].ElementValue[0].MaxTemperature,
            // 取得「舒適度」
            isComfortable:
              cityData.WeatherElement[14].Time[
                i
              ].ElementValue[0].WeatherDescription.split("。")[0],
          });
        }
        // 將整理好的區域變數（cityWeather）推入 fetchAPI 的區域變數 (newData) ,資料型態會是二維陣列 （[[0,1,2], [0,1,2], [0,1,2]]）
        newData.push(cityWeather);
      });
      // 將整理好的資料加入到 Data 中
      setData(newData);
    }
    fetchAPI();
  }, []);

  // 目前的 data 是二維陣列，一個陣列中有該城市的三個資訊[ [1,2,3],[1,2,3] ]
  // 取出第一個值
  const firstElements = data.map((element) => {
    return element[0];
  });

  return (
    // WeatherContext 提供 value (API's Data) for children，children 會在 Layout.jsx 帶入
    <WeatherContext.Provider
      value={{ data, firstElements, selectCity, setSelectCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
