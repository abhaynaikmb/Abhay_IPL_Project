import {} from "https://cdn.jsdelivr.net/npm/chart.js@3.8.0/dist/chart.min.js";
import { getCSV2 } from "./q2Serve.js";
import { getCSV } from "./q1Serve.js";
const matchWon = await getCSV2();
const year = await getCSV();
const onlyYear = Object.keys(year);
const teams = Object.keys(matchWon);
const years = Object.values(matchWon);
let a = [];
a[0] = [];
a[1] = [];
a[2] = [];
a[3] = [];
a[4] = [];
a[5] = [];
a[6] = [];
a[7] = [];
a[8] = [];
a[9] = [];
a[10] = [];
a[11] = [];

for (let j = 0; j < teams.length - 2; j++) {
  for (let i = 0; i < onlyYear.length; i++) {
    if (Object.keys(years[j]).find((elt) => elt == onlyYear[i])) {
      a[j][i] = years[j][onlyYear[i]];
    } else {
      a[j][i] = undefined;
    }
  }
}

const ctx = document.getElementById("q2Chart").getContext("2d");
const mixedChart = new Chart(ctx, {
  type: "line",
  data: {
    datasets: [
      {
        label: teams[0],
        data: a[0],
        borderColor: ["rgba(255, 99, 132, 1)"],
        order: 2,
      },
      {
        label: teams[1],
        data: a[1],
        type: "line",
        borderColor: ["rgba(275, 69, 62, 10s)"],
        order: 1,
      },
      {
        label: teams[2],
        data: a[2],
        type: "line",
        borderColor: ["rgba(285, 99, 12, 1)"],
        order: 1,
      },
      {
        label: teams[3],
        data: a[3],
        type: "line",
        borderColor: ["rgba(20, 96, 125, 16)"],
        order: 1,
      },
      {
        label: teams[4],
        data: a[4],
        type: "line",
        borderColor: ["rgba(56-, 95, 32, 1)"],
        order: 1,
      },
      {
        label: teams[5],
        data: a[5],
        type: "line",
        borderColor: ["rgba(245, 7, 52, 1)"],
        order: 1,
      },
      {
        label: teams[6],
        data: a[6],
        type: "line",
        borderColor: ["rgba(24, 8, 132, 1)"],
        order: 1,
      },
      {
        label: teams[7],
        data: a[7],
        type: "line",
        borderColor: ["rgba(56, 67, 3, 1)"],
        order: 1,
      },
      {
        label: teams[8],
        data: a[8],
        type: "line",
        borderColor: ["rgba(25, 79, 132, 1)"],
        order: 1,
      },
      {
        label: teams[9],
        data: a[9],
        type: "line",
        borderColor: ["rgba(5, 9, 13, 18)"],
        order: 1,
      },
      {
        label: teams[10],
        data: a[10],
        type: "line",
        borderColor: ["rgba(45, 99, 32, 1)"],
        order: 1,
      },
      {
        label: teams[11],
        data: a[11],
        type: "line",
        borderColor: ["rgba(25, 89, 132, 94)"],
        order: 1,
      },
    ],
    labels: onlyYear,
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
