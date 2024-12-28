//import { vfLength, vfQuestions } from "../data/data.js";
//V2 : mettre lien vers data dans  
export function vf(bloc, ind, variable, data){
    const l=console.log;
    const div=document.createElement('div');
    div.classList.add('vf');
    div.innerHTML=code();
    bloc.appendChild(div);

  const question = document.querySelector('.question');
  const vrai=document.querySelector('.vrai');
  const faux=document.querySelector('.faux')  
  let reponse =''

// DOM    
  //question.innerHTML=vfQuestions[ind].question;
  //v2
  question.innerHTML=data[ind].question;
 
// SELECTION
const vraiFaux=document.querySelectorAll('.vrai-faux');
vraiFaux.forEach(vf=> {
    vf.addEventListener('click',()=> {
    for (let vf1 of vraiFaux){vf1.classList.remove('selected') }
    vf.classList.add('selected')
    reponse=vf.innerHTML.toLowerCase();
    })
})

//Verifier
const verifier=document.querySelector('.verifier');
verifier.addEventListener('click',()=>{
    const feed=document.querySelector('.feed');
    const feedMsg=feed.querySelector('.msg')
    feed.style.bottom='0px';
    //if(reponse == vfQuestions[ind].rep){
    //v2
    if(reponse == data[ind].rep){
     variable= 'vf correct';
     feedMsg.innerText=variable;
    } else{
     variable ='vf incorrect';
     feedMsg.innerText= variable
    }
})

function code(){
 const html=`<vf-container>
 <h2 class="consigne">Réponds par vrai ou faux </h2>
 <div class="question"></div>
 <div class="vraifaux flx">
     <div class="vrai vrai-faux flx">Vrai</div>
     <div class="faux vrai-faux flx">Faux</div>
 </div>
</vf-container>
<div class="footer flx">
 <div class="verifier flx">Vérifier</div>
</div>`
        return html
    }
    
}

/*export function arrayOfVf(){
    let arr=[];
    for(let i=0; i<vfQuestions.length; i++){
        arr.push(vf(i))
    }
    
    return arr
}
*/