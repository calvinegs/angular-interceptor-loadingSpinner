＃ Angular Intercoptor 使用案例一：Loading Spinner

Angular Interceptor 可以用來作什麼用途呢
 - 修改 HTTP Headers
 - 修改 HTTP request body
 - 設定 authentication/authorization token　（身份認證）
 - 模擬 backend api
 - 修改 HTTP response
 - 處理 HTTP 錯誤  (HTTP Error Handlin)
 - 顯示 Loading Spinner
 - 格式化 JSON Responses
 - 日誌記錄 


本篇筆記我們先來看看如何使用 Interceptor 來完成一個當你在讀取後端資料時可在畫面上顯示一個“正在讀取中...“的動畫效果，這可以讓使用者有良好的使用體驗。

筆記最後要達的效果是，在按下“取得資料”按鈕時，由程式向後端 API 讀取資料，而在讀取完成前，畫面中的所有 UI (如：按鈕）都是呈現無作用的狀況，直到資料回傳完畢。同時如果“向後端 API 讀取資料”的作業時間小於一秒鐘，則不顯示 “讀取中..." 這個動畫效果。

![image](https://user-images.githubusercontent.com/21993717/215669141-ba667303-9a2b-4805-be0b-bb14d450d125.png)