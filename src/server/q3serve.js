
const year =getCSV3();

async function getCSV3() {
const getData = await fetch('http://127.0.0.1:5500/iplGraph/src/data/matches.csv');

const dataMatches = await getData.text();

const getData2 = await fetch('http://127.0.0.1:5500/iplGraph/src/data/deliveries.csv');

const dataDeliveries = await getData2.text();

const rows2 =dataDeliveries.split('\n').slice(1).map((row)=> {
        let finalRow= row.split(',');
     return finalRow
     });
const rows =dataMatches.split('\n').slice(1).map((row)=> {
   let finalRow= row.split(',');
return finalRow
});
let IdNumber = []
let j = 0;
for(let i=0;i<rows.length;i++){
        if(rows[i][1]=='2016'){
                IdNumber[j] = rows[i][0];
                j++;
        }
}
let k=0;
let m = 136365;
let teamObject = {};
for(let i=m;i<rows2.length;i++){
        if(rows2[i][0] > IdNumber[0] && rows2[i][0] != IdNumber[k]){k = k + 1}
        if(rows2[i][0] == IdNumber[k]){
    if(teamObject[rows2[i][2]]){teamObject[rows2[i][2]]+=parseInt(rows2[i][16])}
    else{teamObject[rows2[i][2]]=parseInt(rows2[i][16])}      
}
}








return teamObject;

}
export{getCSV3}