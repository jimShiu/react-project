const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;

/*
LCP (Largest Contentful Paint)：最大內容渲染時間：
指的是從用戶請求網址到窗口中渲染最大可見內容所需要的事件
（最大可見內容通常是圖片或者視頻，或者大塊的文本）

FID (First Input Delay):首次輸入延遲：
指的是從用戶首次與網頁互動（點擊鏈接、按鈕等）到瀏覽器響應此次互動直接的時間。
用於判斷網頁進入互動狀態的時間。

CLS (Cumulative Layout Shift) :累計佈局偏移：
得分範圍0-1，指的是網頁佈局在加載期間的偏移量，0表示沒有偏移，1表示最大偏移，
這個指標指示用戶與網站的交互體驗，如果網址在加載過程佈局一直跳動，用戶體驗會很差。
比如加載一張圖片，但沒有大小空白佔位，導致圖片顯示時頁面高度跳動。

FCP(First Contentful Paint)首次內容繪製，標記瀏覽器渲染來自DOM 第一位內容的時間點，
內容可能是文本、圖像等元素。

TTFB (Time to First Byte) 首字節到達的時間點。
*/
