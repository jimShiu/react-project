import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Memo from './pages/Memo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Memo />
  </React.StrictMode>
);

reportWebVitals(console.log);
// 前端性能檢測工具 --- Web Vitals
