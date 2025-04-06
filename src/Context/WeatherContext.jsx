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
        const cityWeather = [];
        for (let i = 0; i < cityData.WeatherElement[14].Time.length; i++) {
          cityWeather.push({
            city: cityData.LocationName,
            startTime: cityData.WeatherElement[14].Time[i].StartTime,
            endTime: cityData.WeatherElement[14].Time[i].EndTime,
            info: cityData.WeatherElement[14].Time[i].ElementValue[0]
              .WeatherDescription,
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

  console.log("I am Data:", data);
  // data 是二維陣列，一個陣列中有該城市的三個資訊[ [1,2,3],[1,2,3] ]

  const firstElements = data.map((element) => element[0]); // 指取第一陣列的資訊
  console.log(firstElements);

  return (
    // WeatherContext 提供 value (API's Data) for children，children 會在 Layout.jsx 帶入
    <WeatherContext.Provider
      value={{ data, firstElements, selectCity, setSelectCity }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
