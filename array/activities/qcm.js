import { qcmLength, qcmQuestions } from "../data/data.js";

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
  const html=`
  <div class="qcm-container">
      <div class="consigne"><span style="font-weight:bold">QCM - </span> Choisis la bonne réponse </div>
      
      <div class="question">
        Quel était l'âge de Sidi Mohammed dans le roman La boîte à merveilles ?
      </div>
      
      <div class="choix-container">
        <div class="choix c1">Six ans</div>
        <div class="choix c2">Sept ans</div>
        <div class="choix c3">Huit ans  </div>
      </div>
      
      <div class="verifier">Vérifier </div>
    </div>
  
  <style>
  .question{
  flex-basis: 20%;
  padding: 10px;
  font-weight: bold;
  border: 1px solid gray;
  border-radius: 15px;  
}
 
.choix-container {
 width : 100%;
}
.choix{
  color: darkslategray;
  border: 1px solid #ddd;
  width: 100%;
  padding: 8px 15px;
  margin: 10px auto;
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: bold;
  transition: .2s;
}
</style>`
  
  return html
    }
}
