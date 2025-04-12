import React, { useContext, useState } from "react";
import { WeatherContext } from "../Context/WeatherContext";
import "../styles/style.css";
import City from "../Components/City";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faUpLong } from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const { data, firstElements } = useContext(WeatherContext); // 取得 API 資料
  const [isOpen, setIsOpen] = useState(false);
  const [selectCity, setSelectCity] = useState(null);
  // console.log(data);  此時的 data 是二維陣列
  // 指取第一陣列的資訊
  // const firstElements = data.map((element) => element[0]);
  return (
    <div>
      <section className="homepageImage">
        <img src="../images/Taiwan.jpg" alt="Taiwan Mountain" />
        {/* <figcaption>Alishan Ｍountain</figcaption> */}
        <h1>全台天氣概況</h1>
        <div className="cityDown">
          {/* 點選查看是否已開啟 */}
          <button className="city-btn" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={faMap} />
            選擇城市
          </button>
          {/* 透過 Logical AND 條件來比對，如果 isOpen 是 true，顯示 city-meun 表單*/}
          {isOpen && (
            // 如果沒有開啟，就加入 className show，開啟則移除
            <ul className={`city-menu ${isOpen ? "show" : ""}`}>
              {/* 顯示 API 內的城市 */}
              {firstElements.map((weather, index, item) => (
                <li key={item} id={index}>
                  <a
                    // 透過 id 來決定要跳到哪一個城市 (Key 給 React 識別)
                    href={`#${index}`}
                    // 新增 e.target
                    onClick={(e) => {
                      // 防止 a tag 的預設跳轉行為 (顯示在畫面上方)，而是讓 scrollIntoView 來控制滾動效果。
                      e.preventDefault();
                      // 點選該縣市後將 isOpen 狀態更改為 false (關閉 city-menu表單)
                      setIsOpen(false);
                      // 透過 index 來決定重點提示的 cityComponent 是哪一個
                      setSelectCity(index);
                      // 因為 React 狀態是 async，點選 index 時狀態尚未更新，加入 setTimeout 等待渲染完成後執行
                      setTimeout(() => {
                        // 如果 index 存在，執行 scrollIntoView，不存在則不做任何事
                        document.getElementById(index)?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }, 100); // 等待 100ms 後後滾動
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
      <City firstElements={firstElements} selectCity={selectCity} />
      {/* 移動至最上方按鈕 */}
      <button
        className="toUp"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FontAwesomeIcon className="icon" icon={faUpLong} />
      </button>
    </div>
  );
};

export default Homepage;
