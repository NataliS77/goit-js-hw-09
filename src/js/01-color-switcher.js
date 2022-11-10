const btnStart = document.querySelector('[data-start]') 
const btnStop = document.querySelector('[data-stop]')
const bodyEl = document.querySelector('body')
console.log(btnStart)
console.log(btnStop)
btnStart.addEventListener('click',onClickStart)
btnStop.addEventListener('click',onClickStop)


let timerId = null;

function onClickStart(event){

    timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor(); 
}, 1000);
console.log(event)
btnStart.disabled = true;
 btnStop.disabled = false;
// btnStart.setAttribute('disabled', 'disabled');
// btnStop.removeAttribute('disabled')
}


function onClickStop(){
    clearInterval(timerId);
    console.log (timerId)

   btnStart.disabled = false;
 btnStop.disabled = true;
}
// btnStop.setAttribute('disabled', 'disabled');
// btnStart.removeAttribute('disabled')
// }


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
 
  
 