import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import budgetData from '../../data/budgetData.json'; // Importation du fichier JSON

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chart() {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: []
    });

    useEffect(() => {
        if (budgetData.expenses) {
            const labels = budgetData.expenses.map(item => item.category);
            const dataValues = budgetData.expenses.map(item => item.amount);

            setChartData({
                labels: labels,
                datasets: [
                    {
                        label: 'Budget',
                        data: dataValues,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            });
        }
    }, []);

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
        <div>
            <h2>Doughnut Chart Example</h2>
            <Doughnut data={chartData} options={options} />
        </div>
    );
}
