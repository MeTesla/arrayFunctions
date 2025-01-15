// import acticities and data
import {qcmData, ordrePhrasesData, vfData, matchData,ordreEventsData, fillGapData} from './data/data.js'

import {vf} from '../activities/vf.js';
import {qcm} from '../activities/qcm.js';
import {match} from '../activities/match.js'
import {fillGap} from '../activities/fillGap.js'
import { ordreEvents } from '../activities/ordreEvents.js';
import { ordrePhrases } from '../activities/ordrePhrases.js';

const btn=document.querySelector('#btn')

btn.onclick= function(){
  const div=document.createElement('div');
  div.className="qz-container";
  div.innerHTML= html()
  document.body.append(div)
  
  createQuiz()  
  const prev = document.querySelector('.status img')
  prev.onclick = () => div.remove()  
}

function createQuiz(){
   //Variables 
    const container = document.querySelector('.container')    
    const progress= document.querySelector('.my-progress');
    let index=0;
    let allQst=[];
    

    // Create array of All activities     
    for(let i=0; i<qcmData.length; i++){allQst.push(()=>qcm(container, qcmData))}
    for(let i=0; i<vfData.length; i++){allQst.push(()=>vf(container, vfData))}
    for(let i=0; i<matchData.length; i++){allQst.push(()=>match(container, matchData))}
    for(let i=0; i<fillGapData.length; i++){allQst.push(()=>fillGap(container, fillGapData))}
    for(let i =0; i<ordreEventsData.length;i++) allQst.push(()=>ordreEvents(container,ordreEventsData))
    for(let i = 0; i< ordrePhrasesData.length; i++) {allQst.push(()=>ordrePhrases(container, ordrePhrasesData))}
  
//shuffle :
    allQst.sort( ()=>{return Math.random() - 0.5 })
    
//slice n items
    allQst= allQst.slice(0,5)
    
//Progress bar
    let facteur = 100/allQst.length
    
// FIRST ITEM
    allQst[index](container, index);
    progress.style.width= (index+1) * facteur +"%";

// FEED + NEXT ITEMS
    const continu = document.querySelector('.continue')
    const feed = document.querySelector('.feed')
    
    continu.addEventListener('click',()=>{
      if(allQst.length!==index+1){
        index++
        progress.style.width=(index+1)*facteur +"%";        
        feed.style.bottom = "-130px";       
        setTimeout(() => {
            container.firstElementChild.remove();
            allQst[index](container, index);    
        }, 500);                
      } else{
        // Ecran de fin session
        continu.innerText= 'Fin Quiz'        
      }
     })
     
}
function html(){
    const code = `<div class="header">
   <div class="status">
    <img src="../activities/img/previous.svg"> 
    <div class="progress">
      <div class="my-progress"> </div>
   </div>
   <div class="score">
      <div class="my-score"> 20</div>
     </div>
   </div>
  </div>
     
    <div class="container"> </div>
    
    <div class="feed">
        <div class="msg">Oui</div>
        <div class="continue">Continue</div> 
     </div>`
    return code
}
