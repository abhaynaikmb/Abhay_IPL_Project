
const year =getCSV3();

async function getCSV3() {
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
        if(each[1]=='2016')
        return each;
})

let filteredDeliveries = deliveriesData.filter((each)=>{
        let id =Number(each[0]);
        if(id >= Number(filteredID[0][0]) && id <=Number(filteredID[filteredID.length - 1][0]))
        return each;
});

let extraRuns = filteredDeliveries.reduce((total,each)=>{
        if(total[each[3]] != undefined){total[each[3]] += Number(each[16])}
        else{total[each[3]] = Number(each[16])}
        return total
},{})
return extraRuns;

}
export{getCSV3}