import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SpendingChart = () => {
  const data = {
    labels: ['Last month', 'This month'],
    datasets: [
      {
        label: 'Spending',
        data: [2352, 5476],
        borderColor: '#00BFFF',
        backgroundColor: 'rgba(0, 191, 255, 0.2)',
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: '#000',
        pointBorderColor: '#00BFFF',
        pointBorderWidth: 2,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `$${context.raw}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`, 
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '500px', backgroundColor: '#f5f5f5', borderRadius: '10px', padding: '20px', textAlign: 'center' }}>
      <h3>Spending per month</h3>
      <h1>$4,567</h1>
      <Line data={data} options={options} />
    </div>
  );
};

export default SpendingChart;