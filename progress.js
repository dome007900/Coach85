
document.addEventListener('DOMContentLoaded',()=>{
 const weight=localStorage.getItem('weight')||72;
 const waist=localStorage.getItem('waist')||'--';
 const sets=localStorage.getItem('setsDone')||0;
 const goal=localStorage.getItem('goal')||'Muskelaufbau';

 const ids={
   weightValue:weight+' kg',
   waistValue:waist+' cm',
   setsValue:sets,
   goalValue:goal
 };
 Object.keys(ids).forEach(id=>{
   const el=document.getElementById(id);
   if(el) el.textContent=ids[id];
 });

 const ring=document.getElementById('progressFill');
 if(ring){
   const p=Math.min(100,Number(sets)*10);
   ring.style.background=`conic-gradient(#3b82f6 ${p}%, #2a3145 ${p}%)`;
   ring.textContent=p+'%';
 }
});
