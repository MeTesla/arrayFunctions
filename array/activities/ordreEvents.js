// verifier probleme

const l = console.log

export function ordreEvents(bloc, data) {
  const div = document.createElement('div');
  div.classList.add('qcm');
  div.innerHTML = code();
  bloc.appendChild(div);
    
  const container =document.querySelector('.container');
  let drag = document.querySelector('.drag')
  let drop = document.querySelector('.drop')
  let verifier = document.querySelector('.verifier')

 let alea = Math.floor(Math.random() * data.length)
 let oneChapEvents = data[alea]
 let initOneChapEvents = oneChapEvents
 
 oneChapEvents = [...oneChapEvents].sort(function(a,b){return 0.5 - Math.random()})

for (let i=0; i<oneChapEvents.length; i++){
    const div = document.createElement('div')
    div.setAttribute('class','phrase')
    div.innerHTML=oneChapEvents[i]
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

  drag.style.height = (drag.scrollHeight+ 10 * oneChapEvents.length) + 'px'
  //drag.style.height = (drag.getBoundingClientRect().height + 30*data.length) + 'px'
  drop.style.height = drag.getBoundingClientRect().height + 'px'
  drop.innerHTML=null

  // boutton verifier
verifier.addEventListener('click', ()=>{
  const dropedPhrases=[]
  for (let i=0; i<drop.childNodes.length;i++){
      dropedPhrases.push(drop.childNodes[i].innerHTML)
  }
  const feed=document.querySelector('.feed');
  const feedMsg=feed.querySelector('.msg')
  feed.style.bottom='0px';

  if (dropedPhrases.toString()==initOneChapEvents.toString()){   
    feedMsg.innerHTML = 'C\'est correct';
  } else{  
    feedMsg.innerHTML = 'C\'est incorrect';
  }
})
  
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