function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const u=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');function a(e,t){return new Promise(((n,o)=>{setTimeout((()=>{Math.random()>.3&&n({position:e,delay:t}),o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();let n=Number(u.value),o=Number(l.value);for(let t=1;t<=d.value;t+=1)a(t,n).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),n+=o}));
//# sourceMappingURL=03-promises.9a35e5f2.js.map
