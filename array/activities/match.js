//import {accueil} from '../../scripts/main.js'
//import {pairs} from './apparaiement-db.js'
//import confetti from 'https://cdn.skypack.dev/canvas-confetti';
//import {confetti} from '../../assets/confetti.js'
//import {popupFermer} from '../fermer/fermer.js'
 
import {matchMots, matchLength} from '../data/data.js'
const l=console.log;

// ---------- APPARAIEMENT  ------------
export function match(bloc, variable){
   let div=document.createElement('div');
   div.className='match';
   div.innerHTML = htmlCode();  
   bloc.appendChild(div);

 let right=document.querySelector('.right')
 let left=document.querySelector('.left')
 
      // créer les divs
 for(let i=0; i<4; i++){
   let alea=Math.floor(Math.random()*matchMots.length);
   const mot=document.createElement('div');
   const syn=document.createElement('div');
   mot.className='box'; mot.id=i;
   syn.className='box2'; syn.id= i + 4
   mot.innerHTML=matchMots[alea].mot;
   mot.dataset.rep=matchMots[alea].mot;
   syn.innerHTML=matchMots[alea].syn;   

   left.appendChild(mot);
   right.appendChild(syn);
 }

// Une manière de shuffle 2 arrays
// mot et syn unique
const mots=Array.from(document.querySelectorAll('.mot'));
const syns=[...document.querySelectorAll('.syn')];

mots.sort(()=>Math.random() - 0.5);
//mots.sort(()=>Math.random() - 0.5);
let motTemps, synTemps=''

// prendre 4 mots 4 syn de data
// créer 4 divs mots - 4 divs syns ==> +innerHTML
// shuffle les mots et les syns
// addevent listener
   // 1 var temps mot + 1 var temps syn ==> à comparer à chq 2 cliques

    const rows=document.querySelector('.rows');
    const box=document.querySelector('.box');
    const box2=document.querySelector('.box2');
    const redo=document.querySelector('.redo');
    const verifier = document.querySelector('.verifier');
  
    let svg=document.querySelector('#svg');
    let index =0
    let path, paths,xFrom, yFrom,start,end

  rows.ontouchstart=(e)=>{
    let t=e.touches[0]
    xFrom=e.target.getBoundingClientRect().right + 7 - rows.offsetLeft;
    yFrom=e.target.getBoundingClientRect().top + e.target.getBoundingClientRect().height /2 + 3 - rows.offsetTop;
    start=e.target
    svg.innerHTML+=`<path id=${index} class="my-path"> </path>`
  l(e.target.innerText )
    rows.ontouchmove=(e)=>{
      paths=document.querySelectorAll('.my-path');
      let t=e.touches[0]
      if (start.className !== 'box' 
         || start.dataset.hasPath) return
      paths[index].setAttribute('d',`M${xFrom} ${yFrom} L${t.clientX-rows.offsetLeft} ${t.clientY-rows.offsetTop }`)
    }//fin touchmove
  }//fin touchStar
  
  rows.ontouchend=(e)=>{
    let t=e.changedTouches[0]
    end=document.elementFromPoint(t.clientX, t.clientY)
    if((end.className == "box2") 
        && (start.className == "box")
        && (!end.dataset.hasPath)) {
      
      let x =end.getBoundingClientRect().left - 10 - rows.offsetLeft 
      let y = end.getBoundingClientRect().top+ end.scrollHeight /2 + 3- rows.offsetTop
      
      if(start.dataset.hasPath !== 'true') {
        paths[index].setAttribute('d',`M${xFrom} ${yFrom} L${x} ${y}`)
        paths[index].setAttribute('data-from', start.id)
        paths[index].setAttribute('data-to', end.id)
        if(start.dataset.rep == end.innerText){
        paths[index].setAttribute('data-correct', 'correct')
        }
      }
      end.dataset.hasPath='true'
      start.dataset.hasPath="true"
      l(start.innerText, end.innerText)
      index++
     } else if(paths) {paths[index].remove()} else return
   } // fin touchend 
  
  redo.addEventListener('click',()=>{
    
    //svg.children.length > 0 && svg.lastElementChild.remove() = one instruction
     if(svg.children.length > 0){
        let boxes=document.querySelectorAll('.box')
        let boxes2=document.querySelectorAll('.box2')
        let elementId= {from:+svg.lastElementChild.dataset.from,
              to: +svg.lastElementChild.dataset.to
        }
      //, paths[elementId].dataset.from )
      //let a=Array.from[boxes].find(b=>{ return b.id==elementId})
      
      boxes.forEach(b=>{
        if(b.id==elementId.from){
          b.removeAttribute('data-has-path')
         return
        }
      })
        boxes2.forEach(b => {
          if (b.id == elementId.to) {
            b.removeAttribute('data-has-path')
            return
          }
        })
      svg.lastElementChild.remove(); 
      index--;
     }
 })
 
  verifier.addEventListener('click',()=>{
   // data : paths, start.datarep==end.innerText
   svg.childNodes.forEach(path=>{
     if(path.dataset.correct=='correct'){
       path.style.stroke="green"
     } else{
       path.style.stroke="red"
     }
   })
 })

   function htmlCode(){
   let html=` <div class="container">
  <div class="consigne"> Je relie le mot à son synonyme   </div>
 
  <div class="rows">
      <div class="left">
        <!-- <div class="box" data-rep="A cat" id="0">Un chat</div>
        <div class="box" data-rep="A dog" id="1">Un chien</div>
        <div class="box" data-rep="A girafe" id="2">Une girafe </div>
        <div class="box" data-rep="A chicken" id="3">Une poule</div>
  -->
      </div>
      <div class="right">
<!--        <div class="box2" id="4">A dog </div>
        <div class="box2" id="5">A chicken</div>
        <div class="box2" id="6">A cat</div>
        <div class="box2" id="7"> A girafe </div>
-->      </div>
      <svg id="svg"></svg>
  </div>
  <div class="redo"> redo  </div>
  <div class="verifier"> Vérifier </div>
 </div>
  <style>
.rows {
    position: relative;
    width: 100%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
  }
 
  .box, .box2{
    position: relative;
    width: 100px;
    height: 50px;
    line-height: 50px;
    margin-bottom: 10px;
    background-color: darkslategray;
    color: white;
    text-align: center;
    color: white;
    font-size: 0.8rem ;
    font-weight: 500 ;
    border-radius: 5px;
  }
  .box::before, .box2::before{
    content : "";
    position: absolute;
    right: -8px; top: 50%;
    width: 5px;
    height: 5px;
    background-color: darkslategray;
    border-radius: 50%;
  }
  .box2::before{
    left: -8px;
  }
  
    svg{
      position: absolute;
      top:0; left: 0; 
      z-index: -1;
      width: 100%; height: 100%;
      border:1px solid red;
    }
    .my-path{
      stroke: rgb(0, 0, 250);
      stroke-width: 3px;
      stroke-linecap: round;
      stroke-dasharray: 10px 5px;
      stroke: dimgrey;
      fill: transparent; 
    }
  
  .redo{
    width:50px; height: 50px;
    border: 2px solid gray;
    border-radius: 50%;
    text-align: center;
    line-height: 48px;
  }
  </style>
  `
      return html
   }
}

/*
   
*/