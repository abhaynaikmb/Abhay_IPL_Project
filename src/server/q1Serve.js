
const year =getCSV();

async function getCSV() {
const getData = await fetch('http://127.0.0.1:5500/iplGraph/src/data/matches.csv');

const dataMatches = await getData.text();

const rows =dataMatches.split('\n').slice(1).map((row)=> {
   let finalRow= row.split(',');
return finalRow
});


const year =rows.reduce((noYears,eachMatch)=>{
        
        if(noYears[eachMatch[1]]){noYears[eachMatch[1]]+=1}
     else{noYears[eachMatch[1]]=1}
        return noYears;
        
        },{})

       
    


return year;
}
export{getCSV}