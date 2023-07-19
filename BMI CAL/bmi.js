const decrementBtn= document.getElementById('dec')
const incrementBtn= document.getElementById('inc')
const decrement2Btn= document.getElementById('dec2')
const increment2Btn= document.getElementById('inc2')
const countElement = document.getElementById('count')
const count2Element = document.getElementById('count2')

function calculate(){
    var h = Number(document.getElementById("count").value)
    var w =  Number(document.getElementById("count2").value)
    var value = w/(h/100*h/100)
    var emp =  document.getElementById("result")
    emp.innerHTML="Your BMI is "+value.toFixed(2)
}


function output(){
            
    let w = Number (document.getElementById("count").value)
    let h = Number (document.getElementById("count2").value)
   let bmivalue = w/(h/100*h/100);
   let result = document.getElementById("result");
   if(bmivalue<18.5){
    result.innerHTML = " Your BMI is - "+ bmivalue.toFixed(2) +" (Underweight) "
   }
   else if(bmivalue<=18.5 || bmivalue<=24.99){
    result.innerHTML = " Your BMI is - "+ bmivalue.toFixed(2) +" (Normal)"
   }
   else if(bmivalue<=25 || bmivalue>=29.9){
    result.innerHTML = " Your BMI is - "+ bmivalue.toFixed(2) +" (Overweight)"
   }
   else{
    result.innerHTML = " Your BMI is - "+ bmivalue.toFixed(2) +" (Obese)"
   }
}


let count= (document.getElementById('count').value);


function updatecount(){
    countElement.value = count;
}
decrementBtn.addEventListener('click',()=>{
    count--;
    updatecount();
})
incrementBtn.addEventListener('click',()=>{
    count++;
    updatecount();
})
updatecount()

let count2=(document.getElementById('count2').value) ;
function updatecount2(){
    count2Element.value = count2;
}
decrement2Btn.addEventListener('click',()=>{
    count2--;
    updatecount2();
})
increment2Btn.addEventListener('click',()=>{
    count2++;
    updatecount2();
})
updatecount2()