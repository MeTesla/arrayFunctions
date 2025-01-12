const l = console.log;
import { phrases, phrasesLength } from "../data/data.js";
// 
export function ordrePhrases(bloc, ind, variable){
 const div=document.createElement('div');
 div.classList.add('ordre-ph') 
 div.innerHTML = htmlCode()
 document.body.appendChild(div)
 
// --------DOM varibles
var score = document.querySelector('.score')
const progress = document.querySelector('.progress')
var recepteur = document.querySelector('.recepteur')
var emetteur = document.querySelector('.emetteur')
var verifier = document.querySelector('.valider')
var resultat = document.querySelector('.resultat')
var message = document.querySelector('.message')
var bnRep = document.querySelector('.bn-rep')
var suivant = document.querySelector('.qst-suivante')
// -------- GLOBALS
var currentQst = 0
var monScore = 0
const nbrPhrases= 5
var audio
//var phrase, tabPhraseTemp, maPhrase, tabPhrase
let phrasesInOrder=[]
//--------- Execution -----------


verifier.addEventListener('click', verifierFunc)
btnSuivant()
   // Choisir 8 phrases
let mesPhrases=[]
for(let i=0; i<nbrPhrases; i++){
   let index=Math.floor(Math.random()* phrases.length)
   if(mesPhrases.includes(phrases[index])){
   i--
   }
   else{
   phrasesInOrder.push(phrases[index])
   mesPhrases.push(phrases[index].split(" ").sort(function(a, b){return 0.5 - Math.random()}))
   }
   
}

loadPhrase()
function loadPhrase(){ 
   // Load phrases on DOM
 mesPhrases[currentQst].forEach((item)=> {
  let span=document.createElement('span');
  span.innerHTML=item;
  emetteur.appendChild(span)
  
  progress.style.width=(300/mesPhrases.length) *(currentQst+1) + 'px'
  bnRep.innerText=""
  span.addEventListener('click', (ev)=> {
  if (ev.target.parentElement == emetteur)
  {
   recepteur.appendChild(ev.target)
  } else {
   emetteur.appendChild(ev.target)
  }
  })
 })
}


function verifierFunc(){
   if(!recepteur.hasChildNodes()) return
   resultat.style.bottom= "0"
   if(recepteur.innerText==phrasesInOrder[currentQst].split(" ").join("")){
      message.style.color= "var(--correct)"
      message.innerText = "C'est correct"      
      monScore += 10
      score.innerText = monScore
      audio = new Audio('../../assets/audios/yay.mp3')
      audio.play()
   } else{
      message.innerText = "C'est incorrect !"
      bnRep.innerHTML= "La réponse est : <span>" + phrasesInOrder[currentQst] + "</span>"
      message.style.color= "var(--incorrect)"
      audio = new Audio('../../assets/audios/wrong.mp3')
      audio.volume = "0.4"
      audio.play()
   }
}

function btnSuivant(){
   suivant.addEventListener('click', () => {
    currentQst++
    if (currentQst < nbrPhrases){
     emetteur.innerHTML = ""
     recepteur.innerHTML = ""
     loadPhrase()
     resultat.style.bottom = "-100vh"
    } else{
      resultat.innerHTML=`<h1 style="color: var(--secf)">FIN</h1>`
      
    }
   })
}


 function htmlCode(){
 let html=`<h2 class="consigne">Mets en ordre la phrase suivante</h2>
 <div class="q-content">
  <div class="recepteur"></div>
  <div class="emetteur"></div>
 </div>

<div class="footer flx">
  <div class="verifier flx">Verifier</div>
</div>

 <style>
 .oordre-ph{
   height: 100vh;
   width: 100vw;
   padding: 15px;
   position: absolute;
   top: 0;
   left:0;
   background-color: var(--pr);
   transition: 1s;
}
.ordre-ph .q-header{
   display: flex;
   justify-content: space-between;
   width: 100%;
   height: 50px;
   margin: 10px 0;
}

.ordre-ph .progress-bar{
   width:300px;
   height: 10px;
   border: 1px solid var(--secc);
   position: relative;
   border-radius: 10px;
   overflow: hidden;
   margin: auto;
}

.ordre-ph .progress{
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  width: 30%;
  transition: .5s ease-out;
  background-color: var(--comp);
}

.ordre-ph .score{
   height: 70px;
   width: 70px;
   line-height: 70px;
   text-align: center;
   margin: 15px auto;
   border: 3px solid var(--sec);
   border-radius: 50%;
   box-sizing: content-box;
   font-size: 35px;
}

.ordre-ph .recepteur, .ordre-ph .emetteur{
    width:96%; 
    min-height:25vh;
    border:1px solid var(--sec);
    border-radius: 20px;
    margin: 10px auto;
    padding: 15px 10px;
    background-color: var(--secc) ;
}

.ordre-ph .emetteur span, .ordre-ph .recepteur span{
   display: inline-block;
   padding: 5px 15px;
   text-align: center;
   font-size: 16px;
   margin: 3px;
   border-radius: 8px;
   background-color: var(--pr);
   color: var(--secf);
   font-weight :500 ;
   bborder: 1px solid var(--comp) ;
   /*cursor: pointer; cree prob dans mobile*/
   user-select: none;
}

.emetteur span:active, .recepteur span:active{
 transform: scale(.95);
}
.correct{
    background-color: green;
    transition :.3s all;
}
.incorrect{
    background-color: red;
}


.resultat{
   height: 90vh;
   width: 100%;
   position: absolute; 
   bottom:-100vh;
   display:flex;
   align-items: center;
   justify-content: center; 
   background-color: rgba(255,255,255,.8);
   transition: .2s ease-in-out;
}   

.resultat .res-cont{
   height: 200px;
   width: 80%;
   border-radius: 10px;
   margin: 0 auto;
   background-color: var(--pr);
   border: 1px solid var(--sec);
   padding: 20px;

}
.message{
   font-size: 2rem;
   height: 40px;
   text-align: center;
   ccolor: var(--);
}

.bn-rep span{
   ccolor: var(--correct);
   font-weight: bold;
}
.qst-suivante{
   color: var(--pr);
   width: 120px;
   height: 40px;
   line-height: 40px;
   text-align: center;
   border-radius: 20px;
   margin: 20px auto;
   font-size: 16px;
   font-weight: 400;
   background-color: var(--comp);
}
 </style>`
 return html
} 
}