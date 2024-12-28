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
import {qcmLength,vfLength, phrasesLength, phrases} from './data/data.js'
import {qcm} from './activities/qcm.js';
import {vf} from './activities/vf.js';
import { ordreP } from './activities/ordreP.js';
import {match, matchLength} from './activities/match.js'
const l=console.log;

const container= document.querySelector('.container');
const qstIndex = document.querySelector('.index');
const progress= document.querySelector('.progress');
let index=0;
let allQst=[];
let mainFeed='a'

// Create array of All activities 
for(let i=0; i<qcmLength; i++){allQst.push(()=>qcm(container, i, mainFeed) /*, ()=>vf(container,i)*/)}
//for(let i=0; i<vfLength; i++){allQst.push(()=>vf(container, i,mainFeed))}
//for(let i=0; i<phrasesLength; i++){allQst.push(()=>ordreP(container, i,mainFeed))}
for(let i=0; i<matchLength; i++){allQst.push(()=>match(container, mainFeed))}

//shuffle :
allQst.sort( ()=>{return Math.random() - 0.5 })
//slice 10 items
allQst= allQst.slice(0,5)

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
