import { Notify } from 'notiflix/build/notiflix-notify-aio';

console.log('Notify', Notify)
const refs = {
  form: document.querySelector('.form'),

}
 refs.form.addEventListener('submit',onCreatePromises);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
       const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    resolve({position,delay});
  } else {
    reject({position,delay});
  }
    }, delay);
  });
  
 }

 function onCreatePromises(event){
  event.preventDefault();

const formEl = event.currentTarget.elements;
const delay = formEl.delay.value
const step = formEl.step.value;
const amount = formEl.amount.value;

  for (let i= 1; i <= Number(amount); i +=1){
    delay + step;

    createPromise(i,delay).then(onSuccess).catch(onError)

    refs.form.reset(); 

  }

}
function onSuccess({position,delay}){
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  
 }
 function onError({position,delay}){
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);

 }



// console.log(onCreatePromises)
//     createPromise(i, delay)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
//   }

//  }

 

