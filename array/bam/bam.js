<<<<<<< HEAD
//import DATA HERE
//import vf from '../activities/vf.js'
/* au click sur boutton :
  appeler la fonction qui crée : 
   -bloc : HTML + logic 
   -cette fonction import les DONNEES convenables
   -
*/
=======
// import acticities and data

import { qcmQuestions, qcmLength } from "./data/dataBam.js";
import {qcm} from '../activities/qcm.js';

import { vfQuestions, vfLength } from "./data/dataBam.js";
import {vf} from '../activities/vf.js';

import {matchMots, matchLength} from '../data/data.js'
import {match} from '../activities/match.js';
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
    const qstIndex = document.querySelector('.index');
    const progress= document.querySelector('.my-progress');
    let index=0;
    let allQst=[];
    let mainFeed='a'
    
    // Create array of All activities 
    
    for(let i=0; i<qcmLength; i++){allQst.push(()=>qcm(container, i, mainFeed) /*, ()=>vf(container,i)*/)}
    for(let i=0; i<vfLength; i++){allQst.push(()=>vf(container, i,mainFeed, vfQuestions))}
    for(let i=0; i<matchLength; i++){allQst.push(()=>match(container, mainFeed))}

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
      //  qstIndex.innerText=index + '/' + allQst.length
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
    <img src="../activities/img/previous.svg" alt=""> 
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
>>>>>>> cf42938ed4eeebc71446870bcd5216eb012d17d7
