//import {accueil} from '../../scripts/main.js'
//import {pairs} from './apparaiement-db.js'
//import confetti from 'https://cdn.skypack.dev/canvas-confetti';
//import {confetti} from '../../assets/confetti.js'
//import {popupFermer} from '../fermer/fermer.js'


const matchMots = [
   {mot: "Chat", syn:"Miaule"},
   {mot: "Cheval", syn:"Hénit"},
   {mot: "Poule", syn:"Glousse"},
   {mot: "Grenouille", syn:"croisse"},
   {mot: "Moteur", syn:"Vrombit"},
   {mot: "Oiseau", syn:"Chante"},
   {mot: "Chien", syn:"Aboit"},
   {mot: "Vache", syn:"Meugle"},
]
export const matchLength = matchMots.length;
const l=console.log;

// ---------- APPARAIEMENT  ------------
export function match(bloc, variable){
   let div=document.createElement('div');
   div.className='match';
   div.innerHTML = htmlCode();  
   bloc.appendChild(div);

 let col1=document.querySelector('.col1')
 let col2=document.querySelector('.col2')

 
      // créer les divs
 for(let i=0; i<3; i++){
   let alea=Math.floor(Math.random()*matchMots.length);
   const mot=document.createElement('div');
   const syn=document.createElement('div');
   mot.className='mot';
   syn.className='syn';
   mot.innerHTML=matchMots[alea].mot;
   syn.innerHTML=matchMots[alea].syn;   
   syn.dataset.syn=matchMots[alea].mot;
   col1.appendChild(mot);
   col2.appendChild(syn);
 }

// Une manière de shuffle 2 arrays
// mot et syn unique
const mots=Array.from(document.querySelectorAll('.mot'));
const syns=[...document.querySelectorAll('.syn')];

mots.sort(()=>Math.random() - 0.5);
//mots.sort(()=>Math.random() - 0.5);
let motTemps, synTemps=''
mots.forEach(mot=>{
   mot.addEventListener('click', (ev)=>{
      if(motTemps) return;
      motTemps=ev.target.innerText;
      mot.classList.add('disactive');
   })
})

syns.forEach(syn=>{
   syn.addEventListener('click', (ev)=>{
      if(synTemps) return;
      synTemps=ev.target.dataset.syn;
      syn.classList.add('disactive');
   })
})

//Verifier
const verifier=document.querySelector('.verifier');
verifier.addEventListener('click',()=>{
   
   const feed=document.querySelector('.feed');
   const feedMsg=feed.querySelector('.msg').innerHTML
   feed.style.bottom='0px';
   variable=feedMsg;
   l(variable)
})
// prendre 4 mots 4 syn de data
// créer 4 divs mots - 4 divs syns ==> +innerHTML
// shuffle les mots et les syns
// addevent listener
   // 1 var temps mot + 1 var temps syn ==> à comparer à chq 2 cliques


   function htmlCode(){
   let html=`<h2 class="consigne">Clique sur le mot puis sur son synonyme</h2>
   
   <div class="app-container">
     <div class="col1">  </div>
     <div class="col2">  </div>
   </div>
   
   <div class="footer flx">
     <div class="verifier flx">Vérifier</div>
   </div>  
   
   <style>
   .match{
      width:100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: red;
   }
 
   .match .app-container{
      height: 60%;
      width: 90%;
      margin: 20px auto;
      display: flex;
      justify-content: space-between
   }

   .app-container .col1, .app-container .col2{
      width: 48%;
      height: 60vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      gap: 10px;
      border: 1px solid white;
      border-radius: 10px;
   }

   .col1 .mot, .col2 .syn{
      width: 70%;
      height: 40px;
      color: dimgray;
      background-color : white ;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 10px;
      display: flex; justify-content: center; align-items: center;    
      transition: scale 0.3s linear;   
   }

   .mot:active, .syn:active{
   transform: scale(0.97)
   }
   .disactive{
      opacity: 0.5;
   }
   </style>`
      return html
   }
}

/*
   
*/