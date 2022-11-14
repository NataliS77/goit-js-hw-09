
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// console.log(flatpickr)
// console.log(Notify)

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
}


let timerId = null;
refs.btnStart.disabled = true;
refs.btnStart.addEventListener('click', onTimerStart)

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentDate = new Date();
        console.log(selectedDates[0]);
    if (selectedDates[0] - currentDate > 0){
      refs.btnStart.disabled = false; 
    }else{
      refs.btnStart.disabled = true;
 Notify.failure("Please choose a date in the future");
      }
     
     },
  };


const pickDate = flatpickr(refs.input,options,);

function onTimerStart(){
  const selectedDate = pickDate.selectedDates[0];
  // console.log('selectedDate',selectedDate)

  timerId = setInterval(()=>{

    const currentTime = new Date();
    // console.log('currentTime',currentTime);
    const countdownTimer =   selectedDate - currentTime;
    // console.log('countdownTimer',countdownTimer)
    refs.btnStart.disabled = true;

    if (countdownTimer < 0) {
    // останавливаем таймер timerId
    clearInterval(timerId);
    return
  }
    
    const { days, hours, minutes, seconds } = convertMs(countdownTimer)
          console.log(`${days}:${hours}:${minutes}:${seconds}`)
        // console.log(currentTime)
  
       refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.minutes.textContent = minutes;
        refs.seconds.textContent = seconds;
  
    
  },1000)
}


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
 
 console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
 console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
 console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}




