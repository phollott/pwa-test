import{g as t,h as e}from"./chunk-2abae55f.js";function n(n,r){let d,l,u,f=10*-c,v=0,p=!1,L=!1;const m=r.getBoolean("animated",!0)&&r.getBoolean("rippleEffect",!0),h=new WeakMap;function E(e){f=t(e),b(e)}function w(){clearTimeout(u),u=void 0,d&&(D(!1),d=void 0),p=!0}function g(t){d||L||(p=!1,S(function(t){if(!t.composedPath)return t.target.closest(".ion-activatable");{const e=t.composedPath();for(let t=0;t<e.length-2;t++){const n=e[t];if(n.classList&&n.classList.contains("ion-activatable"))return n}}}(t),t))}function b(t){L||(S(void 0,t),p&&t.cancelable&&t.preventDefault())}function S(t,n){if(t&&t===d)return;clearTimeout(u),u=void 0;const{x:a,y:c}=e(n);if(d){if(h.has(d))throw new Error("internal error");d.classList.contains(i)||T(d,a,c),D(!0)}if(t){const e=h.get(t);e&&(clearTimeout(e),h.delete(t));const n=o(t)?0:s;t.classList.remove(i),u=setTimeout(()=>{T(t,a,c),u=void 0},n)}d=t}function T(t,e,n){v=Date.now(),t.classList.add(i);const o=m&&function(t){if(t.shadowRoot){const e=t.shadowRoot.querySelector("ion-ripple-effect");if(e)return e}return t.querySelector("ion-ripple-effect")}(t);o&&o.addRipple&&(l=o.addRipple(e,n))}function D(t){void 0!==l&&l.then(t=>t());const e=d;if(!e)return;const n=a-Date.now()+v;if(t&&n>0&&!o(e)){const t=setTimeout(()=>{e.classList.remove(i),h.delete(e)},a);h.set(e,t)}else e.classList.remove(i)}n.addEventListener("click",function(t){(p||L)&&(t.preventDefault(),t.stopPropagation())},!0),n.addEventListener("ionScrollStart",()=>{L=!0,w()}),n.addEventListener("ionScrollEnd",()=>{L=!1}),n.addEventListener("ionGestureCaptured",w),n.addEventListener("touchstart",function(e){f=t(e),g(e)},!0),n.addEventListener("touchcancel",E,!0),n.addEventListener("touchend",E,!0),n.addEventListener("mousedown",function(e){const n=t(e)-c;f<n&&g(e)},!0),n.addEventListener("mouseup",function(e){const n=t(e)-c;f<n&&b(e)},!0)}function o(t){return t.classList.contains("ion-activatable-instant")}const i="activated",s=200,a=200,c=2500;export{n as startTapClick};