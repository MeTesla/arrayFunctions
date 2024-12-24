import { qcmLength, qcmQuestions } from "./data.js";

export function qcm(bloc,ind, variable){
    const l=console.log
    const div=document.createElement('div');
    div.classList.add('qcm');   
    div.innerHTML=code();
    bloc.appendChild(div);

    const question=document.querySelector('.question');
    const c1=document.querySelector('.c1');
    const c2=document.querySelector('.c2');
    const c3=document.querySelector('.c3');
    let reponse='';
// DOM    
  question.innerHTML=qcmQuestions[ind].question;
  c1.innerHTML=qcmQuestions[ind].c1;
  c2.innerHTML=qcmQuestions[ind].c2;
  c3.innerHTML=qcmQuestions[ind].c3;
 
// SELECTION
const lesChoix= document.querySelectorAll('.choix');
lesChoix.forEach(choix=> {
 choix.addEventListener('click',()=> {
  for(let choice of lesChoix) choice.classList.remove('selected');
  choix.classList.add('selected');
  reponse = choix.innerHTML;
  
 })
}) 
//Verifier
const verifier=document.querySelector('.verifier');
verifier.addEventListener('click',()=>{
  const feed=document.querySelector('.feed');
  const feedMsg=feed.querySelector('.msg')
  feed.style.bottom='0px';

  if(reponse==qcmQuestions[ind].rep){
   variable=`C'est correct !`;
   feedMsg.innerHTML = variable
     //score++
  } else{
   variable='Dommage !!!';
   feedMsg.innerHTML = variable;
   // Array false
  }
})
 function code(){       
  const html=`<div class="qcm-container">
   <h2 class="consigne">Choisis la bonne réponse </h2>
   <div class="question"></div>
     <div class="c1 choix"></div>
     <div class="c2 choix"></div>
     <div class="c3 choix"></div>   
  <div class="footer flx">
    <div class="verifier flx">Vérifier</div>
  </div>
  </div>`
  
  return html
    }
}
