
const l=console.log;
import { phrases, phrasesLength } from "../data/data.js";

export function ordreP(bloc, ind, variable){
  /*
  Bloc : global container
  Ind : question item index
  variable : Feedback msg
  */
   const div=document.createElement('div');
   div.classList.add('ordre-p') 
   div.innerHTML = htmlCode()
   bloc.appendChild(div)
   
  // --------DOM varibles
  var recepteur = document.querySelector('.recepteur')
  var emetteur = document.querySelector('.emetteur')
  let ph=''; // Une phrase

//.split(' ').sort(()=> Math.random() - 0.5);

loadPhrase()
 
function loadPhrase(){ 
   // Load phrases on DOM
   ph=phrases[ind];
   let onePhrase = phrases[ind].split(' ');
   onePhrase.sort(()=>Math.random() - 0.5);
 
   onePhrase.forEach((item)=> {
    let span=document.createElement('span');
    span.innerHTML=item;
    emetteur.appendChild(span)
    
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

//Verifier
const verifier=document.querySelector('.verifier');
verifier.addEventListener('click',()=>{   
   const feed=document.querySelector('.feed');
   const feedMsg=feed.querySelector('.msg').innerHTML
   feed.style.bottom='0px';
   variable=feedMsg;

  /*let rep=[]
  recepteur.childNodes.forEach(span=>{
    rep.push(span.innerHTML);
  })
  l(rep); 
  rep.join(' ')==ph? l('correct'):l('incorrect');
  console.log(rep.join(' '), ph);
  */
})
 function htmlCode(){
 let html=`<h2 class="consigne">Mets en ordre la phrase suivante</h2><div class="q-content">
  <div class="recepteur"></div>
  <div class="emetteur"></div>
</div>

<div class="footer flx">
  <div class="verifier flx">Verifier</div>
</div>
<style>
*{margin: 0 ; padding:0; box-sizing: border-box;}

:root{
--pr: white;
--secc:#D8D6BD;
--sec:#6F6F6F;
--secf:#2C2C2C;
--comp:#E89332;
--correct: rgb(80 199 86);
--incorrect: rgb(255, 86, 94);
}

.ordre-p .score{
height: 70px;
width: 70px;
line-height: 70px;
text-align: center;
margin: 15px auto;
border: 3px solid white;
border-radius: 50%;
box-sizing: content-box;
font-size: 35px;
}

.ordre-p .recepteur, .ordre-p .emetteur{
  height:25vh;
  overflow-Y: auto;
  width: 85vw;
  border: 2px solid white;
  border-radius: 20px;
  margin: 10px auto;
  padding: 10px;
  bbackground-color: rgba(255, 255, 255, 0.425);
}

.ordre-p .emetteur span, .ordre-p .recepteur span{
display: inline-block;
padding: 5px 10px;
text-align: center;
font-size: 16px;
margin: 3px;
border-radius: 8px;
background-color: var(--pr);
color: var(--secf);
font-weight :500 ;
/*cursor: pointer; cree prob dans mobile*/
user-select: none;
}

.emetteur span:active, .recepteur span:active{
transform: scale(.95);
}
</style>`
 return html
} 
}