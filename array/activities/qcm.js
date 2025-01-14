const l=console.log

export function qcm(bloc,ind, variable, data){    
    const div=document.createElement('div');
    div.classList.add('qcm');   
    div.innerHTML=code();
    bloc.appendChild(div);

    const question=document.querySelector('.question');
    const c1=document.querySelector('.c1');
    const c2=document.querySelector('.c2');
    const c3=document.querySelector('.c3');
    let reponse='';

// DOM  UI
  question.innerHTML=data[ind].question;
  c1.innerHTML=data[ind].c1;
  c2.innerHTML=data[ind].c2;
  c3.innerHTML=data[ind].c3;
  l(ind)
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

  if(reponse==data[ind].rep){
   variable=`C'est correct !`;
   feedMsg.innerHTML = variable
     //score++
  } else{
   variable='Dommage !!!';
   feedMsg.innerHTML = variable;
   // Array false
  }
})

// HTML
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

</style>`
  
  return html
    }
}
