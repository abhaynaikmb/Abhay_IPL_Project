
const year =getCSV4();

async function getCSV4() {
const getData = await fetch('http://127.0.0.1:5500/iplGraph/src/data/matches.csv');

const dataMatches = await getData.text();

const getData2 = await fetch('http://127.0.0.1:5500/iplGraph/src/data/deliveries.csv');

const dataDeliveries = await getData2.text();

const deliveriesData =dataDeliveries.split('\n').slice(1).map((row)=> {
        let finalRow= row.split(',');
     return finalRow
     });
const matchesData =dataMatches.split('\n').slice(1).map((row)=> {
   let finalRow= row.split(',');
return finalRow
});
const filteredID = matchesData.filter((each)=>{
        if(each[1]=='2015')
        return each;
})

let filteredDeliveries = deliveriesData.filter((each)=>{
        let id =Number(each[0]);
        if(id >= Number(filteredID[0][0]) && id <=Number(filteredID[filteredID.length - 1][0]))
        return each;
});

let playerObject = filteredDeliveries.reduce((total,each)=>{
        if(total[each[8]] != undefined){total[each[8]] = [total[each[8]][0] += Number(each[17])  ,total[each[8]][1]+1]}
        else{total[each[8]] = [Number(each[17]),1]}
        return total
},{})
const economy = Object.values(playerObject).reduce((e,player,i)=>{
    e[Object.keys(playerObject)[i]] = player[0]/(player[1]/6);
    return e
},{})

let sorted = [];
for (let x in economy) {
    sorted.push([x, economy[x]]);
}

sorted.sort(function(a, b) {
    return b[1] - a[1];
});

return sorted;

}
export{getCSV4}