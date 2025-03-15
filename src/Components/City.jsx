import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/city.css";

const APIKey = import.meta.env.VITE_API_KEY;
const City = () => {
  // data 用於存取 API 的資料
  const [data, setData] = useState([]);
  // loading 判斷是否需要加載，預設加載
  const [loading, setLoading] = useState(true);
  // Error 來顯示錯誤訊息，預設 null 無錯誤
  const [error, setError] = useState(null);

  const API = `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${APIKey}`;

  // 用一個物件來對應城市名稱與圖片
  const cityImages = {
    default: "../images/sky.jpg", // 預設圖片
    臺中市: "../images/台中市.jpg",
    臺北市: "../images/台北市.jpg",
    臺東縣: "../images/台東縣.jpg",
    臺南市: "../images/台南市.jpg",
    宜蘭縣: "../images/宜蘭縣.jpg",
    花蓮縣: "../images/花蓮縣.jpg",
    南投縣: "../images/南投縣.jpg",
    屏東縣: "../images/屏東縣.jpg",
    苗栗縣: "../images/苗栗縣.jpg",
    桃園市: "../images/桃園市.jpg",
    高雄市: "../images/高雄市.jpg",
    基隆市: "../images/基隆市.jpg",
    連江縣: "../images/連江縣.jpg",
    雲林縣: "../images/雲林縣.jpg",
    新北市: "../images/新北市.jpg",
    新竹市: "../images/新竹市.jpg",
    嘉義市: "../images/嘉義市.jpg",
    嘉義縣: "../images/嘉義縣.jpg",
    彰化縣: "../images/彰化縣.jpg",
    澎湖縣: "../images/澎湖縣.jpg",
    新竹縣: "../images/新竹縣.jpg",
  };

  // Render 後執行
  useEffect(() => {
    async function fetchAPI() {
      try {
        // 設定 Loading
        setLoading(true);
        let result = await axios.get(API);
        // 取得 API Data
        const location = result.data.records.location;

        // 使用 map 資料提取，並且設定一個變數 newData 來儲存提取出的資料
        const newData = location.map((cityData) => {
          const city = cityData.locationName;
          const Startweather = cityData.weatherElement[0].time[0].startTime;
          const EndWeather = cityData.weatherElement[0].time[0].endTime;
          const IsRain =
            cityData.weatherElement[1].time[0].parameter.parameterName + "%";
          const MinTemperature =
            cityData.weatherElement[2].time[0].parameter.parameterName + "°C";
          const IsComfortable =
            cityData.weatherElement[3].time[0].parameter.parameterName;
          const MaxTemperature =
            cityData.weatherElement[4].time[0].parameter.parameterName + "°C";

          // 返回資料，這時資料會儲存在 newData
          return [
            city,
            Startweather,
            EndWeather,
            MaxTemperature,
            MinTemperature,
            IsRain,
            IsComfortable,
          ];
        });

        // 將 newData 的資料放入 Data
        setData(newData);
        setLoading(false);
      } catch (err) {
        setError("資料加載失敗，請重整頁面");
        setLoading(false);
      }
    }

    fetchAPI();
    // 未設定 dependency，只會在初次 Render 後加載
  }, []);

  if (loading) {
    return <h1>資料加載中...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="City">
      {data.map((weather, index) => {
        // 根據城市名稱取得對應的圖片，若找不到則使用預設圖片
        const image = cityImages[weather[0]] || cityImages["default"];

        return (
          <section className="cityComponent" key={index}>
            <img src={image} alt={weather[0]} />
            <h2>{weather[0]}</h2>
            <span>天氣概況：{weather[6]}</span>
            <span>
              溫度位於：{weather[4]} - {weather[3]} 之間
            </span>
            <span>降雨機率：{weather[5]}</span>
          </section>
        );
      })}
    </div>
  );
};

export default City;
