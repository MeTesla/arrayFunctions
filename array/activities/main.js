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

// Les chemins sont RELATIFS à main.js
import {qcmLength, phrasesLength, phrases, vfQuestions, vfLength, matchMots, matchLength, dataLength } from '../data/data.js'

import {vf} from './vf.js';
import {qcm} from './qcm.js';
import {match} from './match.js'
import {fillGap} from './fillGap.js'
//import { ordreP } from './ordreP.js';



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
    //for(let i=0; i<qcmLength; i++){allQst.push(()=>qcm(container, i, mainFeed))}
   // for(let i=0; i<vfLength; i++){allQst.push(()=>vf(container, i,mainFeed, vfQuestions))}
   
   
    //for(let i=0; i<phrasesLength; i++){allQst.push(()=>ordreP(container, i,mainFeed))}
  //  for(let i=0; i<matchLength; i++){allQst.push(()=>match(container, mainFeed))}
    for(let i=0; i<dataLength; i++){allQst.push(()=>fillGap(container, mainFeed))}
   
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
        l("Fin de quiz")
        continu.innerText= 'Fin Quiz'
      }

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
     </div>`
 return code
  }
