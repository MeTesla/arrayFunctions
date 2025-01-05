import {data, dataLength} from '../data/data.js'
const l=console.log

export function fillGap(bloc,ind, variable){
  const div=document.createElement('div');
  div.classList.add('fill-gap');   
  div.innerHTML=code();
  bloc.appendChild(div);

  let index = Math.floor(Math.random()*data.length)
  data[index].liste.sort( () => Math.random()-0.5 );
  const header= document.querySelector('.qz-container .header')
  const liste=document.querySelector('.liste');
  const texte=document.querySelector('.texte');

  let motsPos=[];
  let x, y, initPos
  let allowMove=true 
  liste.style.height = liste.scrollHeight + 'px';


// Créer MOTS et GAPS
let txte=data[index].texte
  for (let i=0; i<data[index].liste.length; i++){
      //Mots liste
      let mot = document.createElement('SPAN')
      mot.setAttribute('id', i)
      mot.setAttribute('class', 'mot')
      mot.innerHTML= data[index].liste[i] // pas nécessaire, box est globale.
      liste.appendChild(mot);

      


      //GAPS
      let spans = `<span class="gap" data-rep=${data[index].liste[i]} id="gap${i}"> </span>`
      let t = txte.replace(data[index].liste[i], spans)
      txte = t;
  }

  document.querySelector('.texte').innerHTML=txte

  const mots=document.querySelectorAll('.mot');
  mots.forEach(mot=>{
    motsPos.push({x:mot.offsetLeft,
                    y:mot.offsetTop
      })  
  })
  mots.forEach((mot, index)=>{
      mot.style.position ="absolute";
      mot.style.left=motsPos[index].x +'px'
      mot.style.top=motsPos[index].y +'px'
  })

//add touch events to drag boxes
mots.forEach(item =>{
  item.addEventListener('touchstart', (ev)=> {start(ev,item)})
  item.addEventListener('touchmove', (ev)=> {moveMe(ev,item)})
  item.addEventListener('touchend', (ev)=> {end(ev,item)})
 })
 
 function start(ev, box){
   if(!allowMove) return
   let margin = getComputedStyle(box).paddingLeft;
   
   if(box.dataset.linkedTo) {
     //box.dataset.linkedTo=null
     box.removeAttribute('data-linked-to')
   }
   box.style.transition=""
   let t=ev.touches[0]
   initPos= {
     x: box.getBoundingClientRect().x, 
     y: box.getBoundingClientRect().y}  
   x=t.pageX-box.offsetLeft - box.parentElement.offsetLeft
   y=t.pageY-box.offsetTop - box.parentElement.offsetTop
 }
 
 function moveMe(ev,box){
   if(!allowMove) return
   var t = ev.touches[0]
   box.style.left = t.pageX - x - box.parentElement.offsetLeft + "px";
   box.style.top = t.pageY - y - box.parentElement.offsetTop + "px";
 }
 
 function end(ev, box){
   
   if(!allowMove) return
   box.style.transition="all 0.3s"
   let gap = document.elementsFromPoint(ev.changedTouches[0].clientX, ev.changedTouches[0].clientY);  
    l( gap[1].getBoundingClientRect().x)
   if(gap[1].classList.contains('gap')){
    // box.style.position='static'
    // gap[1].appendChild(box) 
  //  l(gap[1])
    box.style.left= gap[1].getBoundingClientRect().x +"px"
    box.style.top=  gap[1].getBoundingClientRect().y+"px"
     box.style.backgroundColor='red'
     box.dataset.linkedTo=gap[1].id;
     if(box.innerText==gap[1].dataset.rep){
       box.dataset.correct="true"
     }
   } else{
       box.style.left=motsPos[box.id].x +"px"
       box.style.top=motsPos[box.id].y +"px"
  }
   }


function code(){
  const html = `<div class="consigne">
      Je glisse les mots de la liste à l'espace correct
    </div>
    <div class="liste">  </div>
    <div class="texte">  </div>
    <div class="verifier">Vérifier</div>
    <style>
    .fill-gap{
   
    } 
  .liste{
    position: relative ;
    width: 90vw;
    min-height: 90px;
    margin: 10px auto;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    display:flex; flex-wrap: wrap;
  }
  
  .liste span{    
    text-align: center;
    background-color: #e2eaff;
    padding: 0 5px;
    margin: 0 5px 5px 0;
    line-height: 25px;
    touch-action: none;
  }
  
  .texte{
  pposition :relative;

    width: 90vw;
    line-height: 30px;
    margin: 5px auto;
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
  }

  .gap, .liste span{    
    height: 25px;
    display: inline-block;   
    border-radius: 4px;
  }

  .gap{    
    min-width: 80px;
    margin-bottom: -8px;
    border: 1px solid white;
  }
</style>`
  
  return html
}
}