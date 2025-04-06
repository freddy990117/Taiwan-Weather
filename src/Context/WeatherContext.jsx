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
            // 取得「城市名稱」
            city: cityData.LocationName,
            // 取得「開始與結束時間」
            startTime: cityData.WeatherElement[14].Time[i].StartTime,
            endTime: cityData.WeatherElement[14].Time[i].EndTime,
            info: cityData.WeatherElement[14].Time[i].ElementValue[0]
              .WeatherDescription,
            // 取得「降雨機率」
            isRain:
              cityData.WeatherElement[11].Time[i].ElementValue[0]
                .ProbabilityOfPrecipitation,
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

  // 發現取得的資料有些有降雨機率、有些沒有，需要去再去 API 中拿「降雨機率的資料」
  // 原本的資料 1.天氣概況：{weather.isComfortable} 2. 溫度位於：{weather.minTemp} - {weather.maxTemp} 3. 降雨機率：{weather.isRain}

  console.log("I am Data:", data);
  // data 是二維陣列，一個陣列中有該城市的三個資訊[ [1,2,3],[1,2,3] ]

  // const firstElements = data.map((element)=>{element[0]})

  // 重新寫 firstElements，
  const firstElements = data.map((element) => {
    const value = element[0]; // 取第一個 city 的資訊
    const description = value.info; // 取得 info 資訊
    const sentences = description.split("。"); // 根據句號「。」分割成多個字串
    // 提取溫度的區間
    const tempSentence = description
      .split("。")
      // 找到 「攝氏」與「至」後立即返回
      .find((s) => s.includes("攝氏") && s.includes("至"));
    // 根據 「攝氏」分隔成兩個字串，[1]是 XXX 至 XXX 度，再根據「至」分割字串，這樣 [0] 就會是 XXX 溫度
    const minTemp = tempSentence.split("攝氏")[1].split("至")[0];
    const maxTemp = tempSentence
      .split("攝氏")[1]
      .split("至")[1]
      .replace("度", ""); //刪除尾端的「度」

    const isComfortable = sentences[0]; // 取得天氣概況

    // 將原有的 city 資訊與新資料 (isComfortable, minTemp, maxTemp) 結合
    return {
      ...value, // 保留原本的資料
      isComfortable,
      minTemp,
      maxTemp,
    };
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
