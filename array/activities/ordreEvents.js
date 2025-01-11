//import DATA
//import {orderPhraseData} from '../data/data.js';
const l = console.log

export function ordreEvents(bloc, ind, variable) {
  const div = document.createElement('div');
  div.classList.add('qcm');
  div.innerHTML = code();
  bloc.appendChild(div);
  
  
  const container =document.querySelector('.container');
  let drag = document.querySelector('.drag')
  let drop = document.querySelector('.drop')
  let ol= document.querySelector('.ol')
  let verifier = document.querySelector('.verifier')

const initData =[
 'Les trois se rendent à Sidi El Arafi.',
 'La mère décide de retenir l’enfant à la maison.',
 'La visite de Lalla Aicha.',
 'Mly Laarbi se fait escroqué par son apprenti Abdelkader']
 
 let data = [...initData].sort(function(a,b){return 0.5 - Math.random()})

for (let i=0; i<data.length; i++){
    const div = document.createElement('div')
    div.setAttribute('class','phrase')
    div.innerHTML=data[i]
    drag.appendChild(div)
    div.addEventListener('click', (ev)=>{
     if(div.parentElement == drag){
       div.classList.add("li")
       drop.append(div)
      } else{
        div.classList.remove('li')
        drag.appendChild(div)
      }
    })
}

  //drag.style.height = (drag.getBoundingClientRect().height + 30*data.length) + 'px'
  //drop.style.height = drag.getBoundingClientRect().height + 'px'
  drop.innerHTML=null

  
  function code(){
    const html=`<div class="consigne">Je mets en ordre les évènements du chapitre.</div>
    <div class="drag-drop">
         <div class="drop">  </div>
         <div class="drag">   </div>
    </div>
    <div class="verifier">Vérifier </div>`
   return html
  }
}