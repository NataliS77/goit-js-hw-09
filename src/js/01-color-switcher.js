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
}
btnStart.setAttribute('disabled', 'disabled');
btnStop.removeAttribute('disabled')

function onClickStop(){
    clearInterval(timerId);
console.log (timerId)
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
//   const disableButton=()=>{
//   console.log('va') 
//    btnStart.disabled = true;
// }
  
//   bodyStart.addEventListener('click',disableButton);