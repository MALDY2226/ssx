import React from 'react';
import { Pie } from 'react-chartjs-2';

const ResultsChart = ({ results }) => {
    const chartData = {
        labels: ['Malware Detected', 'Clean'],
        datasets: [{
            data: [results.combinedResult, 100 - results.combinedResult],
            backgroundColor: ['#FF6384', '#36A2EB']
        }]
    };

    const chartOptions = {
        plugins: {
            title: {
                display: true,
                text: 'Malware Detection Results'
            }
        }
    };

    return (
        <div>
            <h2>Scan Results</h2>
            <Pie data={chartData} options={chartOptions} />
        </div>
    );
};

export default ResultsChart;
