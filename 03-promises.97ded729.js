var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var r=n("iQIUW");console.log("Notify",r.Notify);const i={form:document.querySelector(".form")};function l(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}function u({position:e,delay:o}){r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)}function s({position:e,delay:o}){r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}i.form.addEventListener("submit",(function e(o){o.preventDefault();const t=o.currentTarget.elements;let n=Number(t.delay.value),r=Number(t.step.value),f=Number(t.amount.value);for(let e=1;e<=f;e+=1)l(e,n).then(u).catch(s),n+=r,i.form.reset();console.log(e)}));
//# sourceMappingURL=03-promises.97ded729.js.map