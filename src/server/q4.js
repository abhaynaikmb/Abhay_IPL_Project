
import {} from "https://cdn.jsdelivr.net/npm/chart.js@3.8.0/dist/chart.min.js"
import { getCSV4 } from './q4Serve.js';
const top = await getCSV4();

let topTen=[];
let players=[];
let scores=[];
for(let i=0;i<10;i++)
{
topTen[i]=top[i]
}

for(let j=0;j<10;j++)
{
  
   players.push(topTen[j][0]);
scores.push(topTen[j][1]);


}






    const ctx = document.getElementById('q4Chart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: players,
            datasets: [{
                label: 'average ',
                data: scores,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(25, 99, 132, 1)'
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