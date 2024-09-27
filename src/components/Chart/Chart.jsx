import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart({ expenses }) {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        if (expenses) {
            const labels = expenses.map(item => item.category);
            const dataValues = expenses.map(item => item.amount);

            const categoryColors = {};
            expenses.forEach(expense => {
                if (!categoryColors[expense.category]) {
                    categoryColors[expense.category] = expense.color;
                }
            });

            const backgroundColors = Object.values(categoryColors);
            const borderColors = backgroundColors.map(color => color.replace('0.6', '1'));

            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: 'Budget',
                        data: dataValues,
                        backgroundColor: backgroundColors,
                        borderColor: borderColors,
                        borderWidth: 1,
                    },
                ],
            });
        }
    }, [expenses]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 col-lg-4'>
                    {/* Doughnut Chart */}
                    <Doughnut data={chartData} options={options} />
                </div>
            </div>
        </div>
    );
}
