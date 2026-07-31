const exercises=[
{name:'Liegestütze',sets:3,reps:'10-15'},
{name:'Rudern mit Band',sets:3,reps:'12'},
{name:'Kniebeugen',sets:3,reps:'15'},
{name:'Plank',sets:3,reps:'45 s'}
];
let i=0,done=0;
function current(){return exercises[i]}
function render(){
 const e=current();
 const n=document.getElementById('exerciseName');
 const d=document.getElementById('exerciseInfo');
 if(n){n.textContent=e.name;d.textContent=`${e.sets} Sätze • ${e.reps}`;}
}
document.addEventListener('DOMContentLoaded',()=>{
 render();
 document.getElementById('nextExercise')?.onclick=()=>{i=(i+1)%exercises.length;render();}
 document.getElementById('prevExercise')?.onclick=()=>{i=(i-1+exercises.length)%exercises.length;render();}
 document.getElementById('finishSet')?.onclick=()=>{
   done++;
   localStorage.setItem('setsDone',done);
   const o=document.getElementById('setsDone');
   if(o)o.textContent=done;
 };
 document.getElementById('pause30')?.onclick=startPause;
});
function startPause(){
 let s=30;
 const out=document.getElementById('pauseTimer');
 out.textContent=s+' s';
 const iv=setInterval(()=>{
   s--;
   out.textContent=s>0?s+' s':'Weiter!';
   if(s<=0)clearInterval(iv);
 },1000);
}
