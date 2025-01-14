const l=console.log;
// PROBLEME : la référence à l'image se fait par rapport à la page HTML. en cas de plusieurs appels il y aura problème de LIEN 

/*
  1- STYLE commun pour tous les appels
     Où placer le fichier CSS.
       import sheet from './style.css' assert { type: 'css' };
       document.adoptedStyleSheets = [sheef]
  2- ONE question quiz function : 
      Solution: la boucle de création : i < 1 : ce qui limite les questions en une SEUL
*/
 
/* 
main.js :
  -Qst index | allQst[]  | feed msg  |  next qst | 
  -Add: progress, score
  -mettre verifier ici.
qcm.js
  -UI  | qcm logic  | vérifier
*/

// Les chemins sont RELATIFS à main.js
import {qcmData, ordrePhrasesData, vfData, matchData,ordreEventsData, fillGapData} from '../data/data.js'

import {vf} from './vf.js';
import {qcm} from './qcm.js'; //qcm(container, i, mainFeed, qcmData)
import {match} from './match.js'
import {fillGap} from './fillGap.js'
import { ordreEvents } from './ordreEvents.js';
import { ordrePhrases } from './ordrePhrases.js';
// ----------------------------------

const btn=document.querySelector('#btn')
btn.onclick= function(){
  const div=document.createElement('div');
  div.className="qz-container";
  div.innerHTML= html()
  document.body.append(div)
  
  createQuiz()
  const prev =  document.querySelector('.status img')
   prev.onclick = ()=> div.remove()
  }  

 function createQuiz(){
   //Variables 
    const container = document.querySelector('.container')
    //const qstIndex = document.querySelector('.index');
    const progress= document.querySelector('.my-progress');
    let index=0;
    let allQst=[];
    let mainFeed='a'
    
    // Create array of All activities 
    // for(let i=0; i<qcmData.length; i++){allQst.push(()=>qcm(container, i, mainFeed, qcmData))}
    // for(let i=0; i<vfData.length; i++){allQst.push(()=>vf(container, i,mainFeed, vfData))}
    for(let i=0; i<matchData.length; i++){allQst.push(()=>match(container, mainFeed, matchData))}
    // for(let i=0; i<fillGapData.length; i++){allQst.push(()=>fillGap(container, mainFeed, fillGapData))}
    // for(let i =0; i<ordreEventsData.length;i++) allQst.push(()=>ordreEvents(container, mainFeed, ordreEventsData))
    // for(let i = 0; i< ordrePhrasesData.length; i++) {allQst.push(()=>ordrePhrases(container,i , mainFeed, ordrePhrasesData))}
    
    //shuffle :
    allQst.sort( ()=>{return Math.random() - 0.5 })
    
    //slice 10 items
    allQst= allQst.slice(0,10)
    
    //Progress bar
    let facteur = 100/allQst.length
    
    // FIRST ITEM
    allQst[index](container, index);
    progress.style.width= (index+1)*facteur +"%";

    // FEED + NEXT ITEMS
    const continu = document.querySelector('.continue')
    const feed = document.querySelector('.feed')
    continu.addEventListener('click',()=>{
      if(allQst.length!==index+1){
        index++
        progress.style.width=(index+1)*facteur +"%";
        //qstIndex.innerText=index + '/' + allQst.length
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
    <img src="./activities/img/previous.svg" alt=""> 
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
