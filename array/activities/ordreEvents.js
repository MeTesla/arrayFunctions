//import DATA
const l = console.log
export function ordreEvents(bloc, ind, variable) {
  const div = document.createElement('div');
  div.classList.add('qcm');
  div.innerHTML = code();
  bloc.appendChild(div);
  
  
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