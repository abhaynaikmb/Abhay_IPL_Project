
import {} from "https://cdn.jsdelivr.net/npm/chart.js@3.8.0/dist/chart.min.js"
import { getCSV4 } from './q4Serve.js';
const top = await getCSV4();
let topTen=[];
for(let i=0;i<10;i++)
{
topTen[i]=top[i]
}

    document.getElementById("q4Value").innerHTML=JSON.stringify(topTen, null, 2);



