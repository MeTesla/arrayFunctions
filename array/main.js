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
<<<<<<< HEAD
    //Varibales
=======
   //Variables 
>>>>>>> cf42938ed4eeebc71446870bcd5216eb012d17d7
    const container = document.querySelector('.container')
    const qstIndex = document.querySelector('.index');
    const progress= document.querySelector('.progress');
    let index=0;
    let allQst=[];
    let mainFeed='a'
    
    // Create array of All activities 
    for(let i=0; i<vfLength; i++){allQst.push(()=>vf(container, i,mainFeed, vfQuestions))}
   /* for(let i=0; i<qcmLength; i++){allQst.push(()=>qcm(container, i, mainFeed)}
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
    allQst[index](container, index); // -------- A RELIIIIIIIRE --------
    
    // FEED + NEXT ITEMS
    const continu = document.querySelector('.continue')
    const feed = document.querySelector('.feed')
    continu.addEventListener('click',()=>{
      index++
      progress.style.width=(index+1)*facteur +"%";    // update progress bar
      qstIndex.innerText=index + '/' + allQst.length  // update qst index
      feed.style.bottom = "-130px";                   // Hide feed bloc
      setTimeout(() => {
          container.firstElementChild.remove();       // Remove Bloc
          allQst[index](container, index);            // ------- A RELIRE -----
      }, 500);
      
      // Ecran de fin session
    })
    
  }

  function html(){
    const code = `<div class="nav">
      <div class="entete">
        <div class="logo">Euduka</div>    
        <div class="index">0</div>
        <div class="menu"><i class="fa fa-bars" aria-hidden="true"></i></div>
      </div>

       <div class="progress-container">
         <div class="progress">   </div>
       </div>

     </div>
    <div class="container"> </div>
    
    <div class="feed">
        <div class="msg">Oui</div>
        <div class="continue">Continue</div> 
     </div>
  
  <style>
   .nav{
  height: 60px;
  background-color: rgb(122, 122, 252);
  padding: 15px;
  }
  .entete{
  display:flex; justify-content: space-between; align-items: center;
  }
  .progress-container{
  position: relative;
  width: 250px;
  height: 5px;
  background-color: whitesmoke;
  border-radius: 2px;
  margin: 15px auto;

  }
  .progress{
  position: absolute;
  height: 100%;
  top: 0; left: 0;
  background-color: green;
  transition: width 0.4s ease;
  }

  .container{
  flex:1;
  background-color: rgb(122, 122, 252);;
  position: relative;
  }
  .qcm, .vf, .ordre-p, .match{
  position: absolute;
  height: 100%; width: 100%;
  animation : anime 2s ease;
  }
  @keyframes anime {
  from{opacity: 0}
  to{opacity: 1}
  }

  .consigne{
      font-size: 1rem;      
      margin: 10px  0 40px;
      padding: 10px ;
      color:white ;
  }
  .question{
  height: 100px; width: 90vw;
  border: 1px solid white;
  border-radius: 15px;
  padding: 10px;
  font-size: 1.2rem;
  margin :auto;
  }
  
  .choix{
  height: 35px;
  width: 80%;
  line-height: 35px;
  background-color: rgba(255, 255, 255, 0.425);
  border-radius: 20px;
  padding-left: 15px;
  margin: 20px auto;
  transition: all 0.2s linear;
  }
  
  .c1 {
    margin-top: 50px;
  }

  .vrai-faux.selected, .choix.selected{
  background-color: yellow;
  }
  .vrai-faux{
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.438);
  border: 1px solid white;
  border-radius: 10px;
  margin: 60px 40px;
  font-size: 20px;
  }
  .footer{
  height: 10vh;
  width: 100%;
  bbackground-color: yellow;
  position: fixed;
  bottom: 30px;
  }
  .verifier{
  width: 120px;
  height: 40px;
  background-color:white ;
  font-size: 1.2rem;
  border-radius: 10px;
  margin-top: 20px;
  }
  .flx{
  display:flex; justify-content: center; align-items: center;
  }

  .feed{
  height: 130px;
  width: 100%;
  position:absolute;
  bottom: -130px;
  display: flex; flex-direction: column;
  justify-content: space-evenly;align-items:center;
  background-color: #0288D1 ;
  transition: all 0.3s ease-out;
  }
  .feed .msg{
  font-size: 1.8rem;
  color: white;
  }
  .feed .continue{
  padding: 10px 30px;
  text-align: center;

  border: 1px solid white;
  color: white;
  border-radius: 3px;
  }
  .feed .continue:active{
  transform-origin: top left;
  scale: 0.98;
  }
  </style>`
    return code
  }
