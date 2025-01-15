
export function vf(bloc, data){
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
 
let ind = Math.floor(Math.random() * data.length)
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
    if(reponse == data[ind].rep){     
     feedMsg.innerText='vf correct';
    } else{
     feedMsg.innerText= 'vf incorrect';
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