
import {} from "https://cdn.jsdelivr.net/npm/chart.js@3.8.0/dist/chart.min.js"
import { getCSV } from './q1Serve.js';
const year = await getCSV();
const onlyYear=Object.keys(year);
const timesYear=Object.values(year);
const ctx = document.getElementById('q1Chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: onlyYear,
        datasets: [{
            label: 'Number of matches played per year for all years',
            data: timesYear,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});