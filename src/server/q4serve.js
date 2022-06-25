
const year =getCSV4();

async function getCSV4() {
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
        if(rows[i][1]=='2015'){
                IdNumber[j] = rows[i][0];
                j++;
        }
}
let k=0;
let m = 122713;
let playerObject = {};
for(let i=m;i<rows2.length;i++){
        if(rows2[i][0] > IdNumber[0] && rows2[i][0] != IdNumber[k]){k = k + 1}
        if(rows2[i][0] == IdNumber[k]){
    if(playerObject[rows2[i][8]]){playerObject[rows2[i][8]] = [playerObject[rows2[i][8]][0]+=parseInt(rows2[i][17]), playerObject[rows2[i][8]][1]+1]}
    else{playerObject[rows2[i][8]]=[parseInt(rows2[i][17]),1]}      
}
}

const economy = Object.values(playerObject).reduce((e,player,i)=>{
    e[Object.keys(playerObject)[i]] = player[0]/(player[1]/6);
    return e
},{})

let sorted = [];
for (let x in economy) {
    sorted.push([x, economy[x]]);
}

sorted.sort(function(a, b) {
    return a[1] - b[1];
});







return sorted;

}
export{getCSV4}