const display = document.getElementById('display');
const buttons = document.getElementById('buttons');

buttons.addEventListener('click',(e) => {
    // console.log(e.target.classList.contains('numbers'))
    let target = e.target;
    // console.log(target)
    
   if (e.target.innerHTML ==="c"){
        display.value = "";
    }
    else if(e.target.classList.contains('numbers')){
        display.value += target.innerHTML;
    }
    else  if(e.target.classList.contains('operators')){
        let lastchar = display.value[display.value.length-1]
        if (["+", "-","*", "/"].includes(lastchar)){
            display.value += display.value.slice(0,-1)+target.innerHTML
        }
        else{
            display.value += target.innerHTML;
        }
    }
    else if(e.target.innerHTML === "="){
        display.value= eval(display.value)
    }
})