const l = console.log;
 
export function ordrePhrases(bloc, data){
 const div=document.createElement('div');
 div.classList.add('ordre-ph') 
 div.innerHTML = htmlCode()
 bloc.appendChild(div)
 
// --------DOM varibles
//var score = document.querySelector('.score')
//const progress = document.querySelector('.progress')
var recepteur = document.querySelector('.recepteur')
var emetteur = document.querySelector('.emetteur')
var verifier = document.querySelector('.verifier')
//var resultat = document.querySelector('.resultat')
//var message = document.querySelector('.message')
//var bnRep = document.querySelector('.bn-rep')
//var suivant = document.querySelector('.qst-suivante')
// -------- GLOBALS
//var currentQst = 0
//var monScore = 0
//const nbrPhrases= 5
//var audio
//var phrase, tabPhraseTemp, maPhrase, tabPhrase
let phraseInOrder=''
//--------- Execution -----------


// load one phrase
// save it in a string
// traiter la phrase :: spans, click append
// vérifier

//btnSuivant()
   // Choisir 1 phrases
let index=Math.floor(Math.random()* data.length)
phraseInOrder = data[index]
let onePhrase = data[index].split(' ').sort(function(a, b){return 0.5 - Math.random()})

/*let mesPhrases=[]
for(let i=0; i<phrases.length; i++){
   let index=Math.floor(Math.random()* phrases.length)
   if(mesPhrases.includes(phrases[index])){
     i--
   }
   else{
     phrasesInOrder.push(phrases[index])
     mesPhrases.push(phrases[index].split(" ").sort(function(a, b){return 0.5 - Math.random()}))
   }
} */

loadPhrase()
function loadPhrase(){ 
   // Load phrases on DOM
 onePhrase.forEach((item)=> {
  let span=document.createElement('span');
  span.innerHTML=item;
  emetteur.appendChild(span)
  
  //progress.style.width=(300/mesPhrases.length) *(currentQst+1) + 'px'
  //bnRep.innerText=""
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

   emetteur.style.height = (emetteur.scrollHeight+ 30 ) + 'px'
   recepteur.style.height = emetteur.getBoundingClientRect().height + 'px'

verifier.addEventListener('click', verifierFunc)
function verifierFunc(){
   if(!recepteur.hasChildNodes()) return
   const feed=document.querySelector('.feed');
   const feedMsg=feed.querySelector('.msg')
   feed.style.bottom='0px';
   //resultat.style.bottom= "0"
   if(recepteur.innerText==phraseInOrder.split(' ').join('')){     
     // message.style.color= "var(--correct)"
      //message.innerText = "C'est correct"      
      //monScore += 10
      //score.innerText = monScore
      //audio = new Audio('../../assets/audios/yay.mp3')
      //audio.play()      
      feedMsg.innerHTML = `C'est correct !`;
   } else{      
      feedMsg.innerHTML = `C'est incorrect !`;
      /*message.innerText = "C'est incorrect !"
      bnRep.innerHTML= "La réponse est : <span>" + phrasesInOrder[currentQst] + "</span>"
      message.style.color= "var(--incorrect)"
      audio = new Audio('../../assets/audios/wrong.mp3')
      audio.volume = "0.4"
      audio.play()*/
   }
}

function htmlCode(){
 let html=`<h2 class="consigne">Mets en ordre la phrase suivante</h2>
 <div class="q-content">
  <div class="recepteur drag"></div>
  <div class="emetteur drag"></div>
 </div>

<div class="footer flx">
  <div class="verifier flx">Verifier</div>
</div>

 <style>
 .emetteur, .recepteur{
   padding: 5px;
   margin-bottom: 10px;

 }
.emetteur span, .recepteur span{
   display: inline-block;
   padding: 5px 15px;
   text-align: center;
   font-size: 16px;
   margin: 3px;
   border-radius: 8px;
   background-color: white;
   color: #222;
   font-weight :500 ;
   border: 1px solid white ;
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