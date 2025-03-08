import React from "react";
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      天氣預測報告皆參考:{" "}
      <a href="https://opendata.cwa.gov.tw/dist/opendata-swagger.html#/">
        中央氣象署開放資料平臺之資料擷取API
      </a>
    </div>
  );
};

export default Footer;
