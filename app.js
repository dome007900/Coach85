document.addEventListener('DOMContentLoaded',()=>{
 const start=document.getElementById('startTraining');
 if(start){
   start.onclick=()=>{
     document.getElementById('trainingPanel').style.display='block';
     start.scrollIntoView({behavior:'smooth'});
   }
 }
});