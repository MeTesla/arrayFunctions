export function uniqueIndexes(nbrIndexes, dataLength){
    let mesIndexes=[]
    for(let i=0; i<nbrIndexes; i++){
      let index=Math.floor(Math.random()* dataLength)
      mesIndexes.includes(index) ? i-- : mesIndexes.push(index)
    }
    return mesIndexes
 }