var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var r=t("iQIUW");console.log("Notify",r.Notify);const i={form:document.querySelector(".form")};function l(e,o){return new Promise(((n,t)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:o}):t({position:e,delay:o})}),o)}))}function u({position:e,delay:o}){r.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)}function s({position:e,delay:o}){r.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}i.form.addEventListener("submit",(function e(o){o.preventDefault();const n=o.currentTarget.elements,t=Number(n.delay.value),r=(Number(n.step.value),Number(n.amount.value));for(let e=1;e<=r;e+=1)l(e,t).then(u).catch(s),i.form.reset();console.log(e)}));
//# sourceMappingURL=03-promises.beb7eedf.js.map
