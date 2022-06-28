import {} from "https://cdn.jsdelivr.net/npm/chart.js@3.8.0/dist/chart.min.js";
import { getCSV3 } from "./q3Serve.js";
const team = await getCSV3();
const teams = Object.keys(team);
const extraRuns = Object.values(team);

const ctx = document.getElementById("q3Chart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: teams,
    datasets: [
      {
        label: "Number of extra runs",
        data: extraRuns,
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(25, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
