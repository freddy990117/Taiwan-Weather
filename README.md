# Taiwan Weather 🇹🇼

一個提供台灣各縣市即時天氣資訊與天氣預報的網頁應用程式 ☀️

---

### 本專案練習重點 🚩

**氣象資料串接**

- 使用 [中央氣象局開放資料 API](https://opendata.cwa.gov.tw/dist/opendata-swagger.html#/) 擷取即時天氣與預報資訊

**Chart.js 資料視覺化**

- 利用 [Chart.js](https://www.chartjs.org/) 將資料以圖表方式呈現，使使用者更直觀地了解天氣變化

---

## 專案預覽

<video src="https://i.imgur.com/pBeCJET.mp4" width="600" autoplay loop muted></video>

---

## 功能介紹

| 功能         | 說明                                                                                                                                    |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| 查看即時天氣 | 使用者可以查詢各縣市目前的天氣狀況、氣溫、降雨機率等資訊                                                                                |
| 查看天氣預報 | 1. 使用者可查看未來 7 天的天氣預報（包含天氣狀況、氣溫、降雨機率）<br>2. 使用長條圖呈現降雨機率變化<br>3. 使用折線圖呈現最高/最低溫趨勢 |

---

## 安裝與執行方式

請依照以下步驟下載並執行專案。

### 1. Clone 專案

```bash
git clone https://github.com/freddy990117/Taiwan-Weather.git
```

### 2. 建立帳號並取得 API 金鑰

```
中央氣象局開放資料平台 → 註冊帳號 → 登入後 → 點選「會員資訊」 → 「API 授權碼」 → 取得授權碼
```

## 3. 進入專案資料夾

```
$ cd Taiwan-Weather
```

## 4. 新增 .env 檔案並填入 API 金鑰

```
Create a .env file and input your API Key
VITE_API_KEY= "YOUR_API_KEY"
```

## 5. 安裝套件與執行

```
npm install -> npm run dev
```

---

## 專案作者 🙋🏻‍♂️

Freddy Chang

## 特別感謝 🙏

特別感謝 [smallpaes](https://github.com/smallpaes) 提供本專案的初始結構與設計靈感。
