
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

</style>`
 return html
} 
}