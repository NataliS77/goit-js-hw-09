var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequired7c6=n);var i=n("iQIUW");console.log("Notify",i.Notify);const r={form:document.querySelector(".form")};function l(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}function f({position:e,delay:o}){i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)}function s({position:e,delay:o}){i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}r.form.addEventListener("submit",(function(e){e.preventDefault();const o=e.currentTarget.elements,t=o.delay.value,n=(o.step.value,o.amount.value);for(let e=1;e<=Number(n);e+=1)l(e,t).then(f).catch(s),r.form.reset()}));
//# sourceMappingURL=03-promises.27ea2cf1.js.map
