import {fillGapData, fillGapLength} from '../data/data.js'
const l=console.log
export function fillGap(bloc,ind, variable){
  const l=console.log
  const div=document.createElement('div');
  div.classList.add('fill-gap');   
  div.innerHTML=code();
  bloc.appendChild(div);

  let index = Math.floor(Math.random()*fillGapLength)
    fillGapData[index].liste.sort( () => Math.random()-0.5 );
  
  const liste=document.querySelector('.liste');
  const texte=document.querySelector('.texte');
  
  let motsPos=[];
  let x, y, initPos
  let replacement, allowMove=true 
  liste.style.height = liste.scrollHeight + 'px';
  l(liste.style.scrollHeight)
  // Créer MOTS et GAPS
  let txte=fillGapData[index].texte
  
  for (let i=0; i<fillGapData[index].liste.length; i++){
        //BOX / Mots liste
      let mot = document.createElement('SPAN')
      mot.setAttribute('id', i)
      mot.setAttribute('class', 'mot')
      mot.innerHTML= fillGapData[index].liste[i] // pas nécessaire, box est globale.
      liste.appendChild(mot);
  
      //save positions in array
      motsPos.push({x:mot.getBoundingClientRect().x,y:mot.getBoundingClientRect().y})  
        //GAPS
      let spans = `<span class="gap" data-rep=${fillGapData[index].liste[i]} id="gap${i}"> </span>`
      let t = txte.replace(fillGapData[index].liste[i], spans)
      txte = t;
  }
  
    const gaps= document.querySelectorAll('.gap');
    l(gaps.length)
  //regular expression
  /*   let reg =""
     for(let i=0; i<fillGap[0].liste.length;i++){ reg += `${fillGap[0].liste[i]}|`}
     let re =reg.slice(0, reg.length-1);
     var rg = new RegExp( re ,"gi");
     let t=fillGap[0].texte.replace( rg, ` <span class="gap"></span> `); 
      texte.innerHTML=t    
  */
  
  document.querySelector('.texte').innerHTML=txte
  
  //Liste : absolute values to mots liste
  const mots=document.querySelectorAll('.mot');
  mots.forEach((mot, index)=>{
      mot.style.position ="absolute";
      mot.style.left=motsPos[index].x+"px"
      mot.style.top=motsPos[index].y+ "px"
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
    l(margin)
    if(box.dataset.linkedTo) {
      //box.dataset.linkedTo=null
      box.removeAttribute('data-linked-to')
    }
    box.style.transition=""
    let t=ev.touches[0]
    initPos= {
      x:box.getBoundingClientRect().x, 
      y: box.getBoundingClientRect().y}  
    x=t.pageX-box.getBoundingClientRect().left -box.parentElement.offsetLeft
    y=t.pageY-box.getBoundingClientRect().top - box.parentElement.offsetTop
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
    if(gap[1].classList.contains('gap')){
      box.style.left= gap[1].getBoundingClientRect().x+"px"
      box.style.top= gap[1].getBoundingClientRect().y+"px"
      
      box.dataset.linkedTo=gap[1].id;
      l(box.innerText, gap[1].dataset.rep)
      if(box.innerText==gap[1].dataset.rep){
        box.dataset.correct="true"
      }
    } else{
        box.style.left=motsPos[box.id].x +"px"
        box.style.top=motsPos[box.id].y +"px"
   }
  }
    
  const verifier=document.querySelector('.verifier');
  verifier.addEventListener('click',()=>{
    allowMove=false
    mots.forEach(mot=>{
      if(!mot.dataset.linkedTo) { }
      if (mot.dataset.correct=='true'){
        l(mot.dataset.linkedTo)
        mot.style.backgroundColor="rgb(183, 255, 116)"
      } else{
        mot.style.backgroundColor="#ff8888"
      }
  
        mot.removeEventListener('touchstart', start)
        mot.removeEventListener('touchmove', moveMe)
        mot.removeEventListener('touchend', end)
    })

})

function code(){
  const html = `  <div class="container">
    <div class="consigne">
      Je glisse les mots de la liste à l'espace correct
    </div>
    <div class="liste">  </div>
    <div class="texte">  </div>
    <div class="verifier">Vérifier</div>
  </div>`
  
  return html
}
}