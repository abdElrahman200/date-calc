let day = document.querySelector('.inp1');
let mont = document.querySelector('.inp2');

let year = document.querySelector('.inp3');

let showday = document.querySelector('.days');
let showmont = document.querySelector('.months');
let showyear = document.querySelector('.years');


let buton = document.getElementById('icon');

let date =new Date
buton.addEventListener('click',function(){
   
   if(year.value <= date.getFullYear() && year.value !=''){
    showyear.innerText = date.getFullYear() - year.value
   }else{alert('wrong year')}
   
   
    if(day.value <= 30 && day.value !=''){
     dayVal = date.getDate()   - day.value;
     showday.innerText = dayVal
     if(dayVal < 0){
        showday.innerText =  dayVal+ 30;
      
     }
   }else{alert('wrong day')}
   if(mont.value <= 12 && mont.value !=''){
    montVal =date.getMonth()- mont.value ;
    showmont.innerText = montVal;

   }else{alert('wrong month')}
   if(montVal < 0){
    showmont.innerText =  montVal+ 12;}

})

