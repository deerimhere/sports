// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; // 임포트 유지
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS 스타일 임포트

// AOS 초기화
AOS.init({
  duration: 800, // 애니메이션 지속 시간 (ms)
  once: true, // 스크롤 시 한 번만 애니메이션 실행
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 퍼포먼스 측정 함수 호출 (필요 시 사용)
reportWebVitals(console.log);
