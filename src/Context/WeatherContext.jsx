import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const APIKey = import.meta.env.VITE_API_KEY;

// 建立一個全域狀態管理的 Context
export const WeatherContext = createContext();

// 建立 Weather's API Provider (WeatherProvider)
export const WeatherProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const API = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${APIKey}`;
      let result = await axios.get(API);
      const location = result.data.records.location;
      console.log(location);

      // 建立 fetchAPI 的區域變數 (newData)
      const newData = [];

      location.forEach((cityData) => {
        // 創建 forEach 的一個區域變數 (cityWeather)
        const cityWeather = [];
        // 這個 time 指的是該城市天氣要素（weatherElement）中的時間區間，每個天氣要素都有各自的 time 陣列
        for (let i = 0; i < cityData.weatherElement[0].time.length; i++) {
          // 將該城市的特定時間區間的天氣資訊加入 cityWeather 陣列 (Wx,Pop,MinT,Ci,MaxT)
          cityWeather.push({
            city: cityData.locationName,
            startTime: cityData.weatherElement[0].time[i].startTime,
            endTime: cityData.weatherElement[0].time[i].endTime,
            isRain:
              cityData.weatherElement[1].time[i].parameter.parameterName + "%",
            minTemp:
              cityData.weatherElement[2].time[i].parameter.parameterName + "°C",
            isComfortable:
              cityData.weatherElement[3].time[i].parameter.parameterName,
            maxTemp:
              cityData.weatherElement[4].time[i].parameter.parameterName + "°C",
          });
        }
        newData.push(cityWeather); // 將整理好的區域變數（cityWeather）推入 fetchAPI 的區域變數 (newData) ,資料型態會是二維陣列 （[[0,1,2], [0,1,2], [0,1,2]]）
      });
      // 透過 hook (setData) 更新 data
      setData(newData);
    }
    fetchAPI();
  }, []);

  return (
    // WeatherContext 提供 value (API's Data) for children，children 會在 Layout.jsx 帶入
    <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
  );
};
