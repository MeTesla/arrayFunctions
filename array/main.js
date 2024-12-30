const l=console.log;
/*
  1- STYLE commun pour tous les appels
     Où placer le fichier CSS.
       import sheet from './style.css' assert { type: 'css' };
       document.adoptedStyleSheets = [sheef]
  2- ONE question quiz function : 
      Solution: la boucle de création : i < 1 : ce qui limite les questions en une SEUL
*/

/*
1- Add a question type 
2- Continue with one ITEM logic
  a-
3- UI design of All Items
  - progress bar
  - Score
  - Ecran de fin + nouvelle session
  - Tableau des réponses
*/
 
/* 
main.js :
  -Qst index | allQst[]  | feed msg  |  next qst | 
  -Add: progress, score
  -mettre verifier ici.
qcm.js
  -UI  | qcm logic  | vérifier
*/

//-------------Test DATA 
import { vfQuestions, vfLength } from "./data/data.js";
import {vf} from './activities/vf.js';

import {qcmLength, phrasesLength, phrases} from './data/data.js'
import {qcm} from './activities/qcm.js';

import { ordreP } from './activities/ordreP.js';

import {match, matchLength} from './activities/match.js'

// ----------------------------------

const btn=document.querySelector('#btn')
btn.onclick= function(){
  const div=document.createElement('div');
  div.className="qz-container";
  div.innerHTML= html()
  document.body.append(div)
  
  createQuiz()
}  
  
  function createQuiz(){
   //Variables 
    const container = document.querySelector('.container')
    const qstIndex = document.querySelector('.index');
    const progress= document.querySelector('.progress');
    let index=0;
    let allQst=[];
    let mainFeed='a'
    
    // Create array of All activities 
    for(let i=0; i<qcmLength; i++){allQst.push(()=>qcm(container, i, mainFeed))}

   /* 
   for(let i=0; i<vfLength; i++){allQst.push(()=>vf(container, i,mainFeed, vfQuestions))}
    for(let i=0; i<phrasesLength; i++){allQst.push(()=>ordreP(container, i,mainFeed))}
    for(let i=0; i<matchLength; i++){allQst.push(()=>match(container, mainFeed))}
    */
    //shuffle :
    allQst.sort( ()=>{return Math.random() - 0.5 })
    
    //slice 10 items
    allQst= allQst.slice(0,15)
    
    //Progress bar
    let facteur = 100/allQst.length
    
    // FIRST ITEM
    allQst[index](container, index);
    
    // FEED + NEXT ITEMS
    const continu = document.querySelector('.continue')
    const feed = document.querySelector('.feed')
    continu.addEventListener('click',()=>{
        index++
        progress.style.width=(index+1)*facteur +"%";
        qstIndex.innerText=index + '/' + allQst.length
        feed.style.bottom = "-130px";
        setTimeout(() => {
            container.firstElementChild.remove();
            allQst[index](container, index);    
        }, 500);
        
        // Ecran de fin session
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
     </div>
    
  <style>
   .header {
    padding: 10px 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .hm{
    display: flex;
    justify-content: space-between;
    padding: 5px 10px;
  }

  .header img{
    width: 30px;
  }
  
  .status{
    display: flex;
    justify-content: space-around;
    gap: 15px;
    align-items: center;
    min-height: 40px;
    margin-top: 0px;
    padding: 0 15px;
  }
  .status .previous {border: 1px solid}
  .status .previous img{
    width: 25px;
  }
  .score .my-score{
    width: 30px; height: 30px;
    box-shadow: 0 0 3px limegreen; 
    border-radius: 15px;
    line-height: 30px; 
    text-align: center;
    font-weight: bold;
  }
  .texte span{
    margin-bottom: -5px;
  }
  
  .status .progress{
    position: relative;
    width: 80%;
    height: 7px;
    border: 1px solid gray;
    border-radius: 3px;
  }
  
  .progress .my-progress{
    position : absolute;
    height: 100%; width: 30%;
    background-color: lightgreen;
  }
  </style>`
    return code
  }
