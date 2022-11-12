
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// console.log(flatpickr)
console.log(Notify)

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}

refs.btnStart.disabled = true;
let timerId = null;
refs.btnStart.addEventListener('click', onTimerStart)
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
        // console.log(selectedDates[0]);
    if (selectedDates[0] - currentDate > 0){
      refs.btnStart.disabled = false;
    }else{
      refs.btnStart.disabled = true;
 Notiflix.Notify.failure("Please choose a date in the future");
      }
     
     }
  };


const pickDate = flatpickr(refs.input,options);

function onTimerStart(){
  const selectedDates = pickDate.selectedDates [0];

  timerId = setInterval(()=>{

    const currentTime = new Date();
   
    const countdownTimer = selectedDates - currentTime;
    refs.btnStart.disabled = true;

    if (countdownTimer <= 0) {
    // останавливаем таймер timerId
    clearInterval(timerId);
  }
    
    const { days, hours, minutes, seconds } = convertMs(deltaTime)
          console.log(`${days}:${hours}:${minutes}:${seconds}`)
        // console.log(deltaTime)
  
       refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.minutes.textContent = minutes;
        refs.seconds.textContent = seconds;
  
  
  
  },1000)
}


  

// let startDate = new Date('2022 11 16 21:45')
// console.log(startDate)
// const timeCout =()=>{
//   let nowTime = new Date();
//   console.log(nowTime)
//   let deltaTime = startDate - nowTime;
  
//   const { days, hours, minutes, seconds } = convertMs(deltaTime)
//         console.log(`${days}:${hours}:${minutes}:${seconds}`)
//       console.log(deltaTime)

//      refs.days.textContent = days;
//       refs.hours.textContent = hours;
//       refs.minutes.textContent = minutes;
//       refs.seconds.textContent = seconds;


// }
// timeCout()
// setInterval((timeCout), 1000);


// const timer={
//   srart(){
//     const startTime = new Date();
//     setInterval(()=>{
//       const currentTime = new Date()
//      const deltaTime = startTime - currentTime;
//      const { days, hours, minutes, seconds } = convertMs(deltaTime)
//       console.log(`${days}:${hours}:${minutes}:${seconds}`)
//     console.log(startTime)
//     },1000)
//   },
// };
// timer.srart();

function addLeadingZero(value){
  return String(value).padStart(2,'0')
}
function convertMs(ms) {
   // Number of milliseconds per unit of time
   const second = 1000;
   const minute = second * 60;
   const hour = minute * 60;
   const day = hour * 24;
 
   // Remaining days
   const days =addLeadingZero( Math.floor(ms / day));
   // Remaining hours
   const hours =addLeadingZero (Math.floor((ms % day) / hour));
   // Remaining minutes
   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
   // Remaining seconds
   const seconds = addLeadingZero( Math.floor((((ms % day) % hour) % minute) / second));
 
   return { days, hours, minutes, seconds };
 }
 
//  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// 

