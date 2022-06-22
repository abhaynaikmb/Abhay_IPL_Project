const yearMatchesWon =getCSV2();

async function getCSV2() {
const getData = await fetch('http://127.0.0.1:5500/iplGraph/src/data/matches.csv');
const dataMatches = await getData.text();

const rows =dataMatches.split('\n').slice(1).map((row)=> {
   let finalRow= row.split(',');
return finalRow;
});



const yearMatchesWon =rows.reduce((noWon,eachMatch)=>{
        let year = eachMatch[1];
        
        let winnerTeam=eachMatch[10];
        if(winnerTeam==""){}else{
        if(noWon[winnerTeam]){
            if(noWon[winnerTeam][year]){noWon[winnerTeam][year]+=1;}
            else{noWon[winnerTeam][year]=1}
            }
        else{noWon[winnerTeam]={}
            noWon[winnerTeam][year]=1}
        }
        return noWon;
        
        },{})

       
    


return yearMatchesWon;
}
export{getCSV2}