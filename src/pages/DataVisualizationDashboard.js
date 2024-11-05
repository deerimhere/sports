// src/pages/DataVisualizationDashboard.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const DataVisualizationDashboard = () => {
  // 예제 데이터
  const barData = {
    labels: ['서울', '부산', '대구', '인천', '광주'],
    datasets: [
      {
        label: '공공 체육 시설 수',
        data: [120, 80, 60, 90, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['초보', '중급', '고급'],
    datasets: [
      {
        label: '체력 수준 분포',
        data: [50, 30, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '지역별 공공 체육 시설 현황',
      },
    },
  };

  return (
    <div className="data-visualization-dashboard">
      <h1>지역 체육 및 건강 데이터 시각화 대시보드</h1>
      
      <div className="chart-container">
        <Bar data={barData} options={options} />
      </div>

      <div className="chart-container">
        <Pie data={pieData} options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: '체력 수준 분포',
            },
          },
        }} />
      </div>
    </div>
  );
};

export default DataVisualizationDashboard;
