function e(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)}function t(e){return!!e.shadowRoot&&!!e.attachShadow}function n(e){const t=e.closest("ion-item");return t?t.querySelector("ion-label"):null}function o(e,n,o,i,a){if(e||t(n)){let e=n.querySelector("input.aux-input");e||((e=n.ownerDocument.createElement("input")).type="hidden",e.classList.add("aux-input"),n.appendChild(e)),e.disabled=a,e.name=o,e.value=i||""}}function i(e,t){if(!e){const e="ASSERT: "+t;throw console.error(e),new Error(e)}}function a(e){return e.timeStamp||Date.now()}function u(e){if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];return{x:e.clientX,y:e.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}}function r(e,t=0){let n;return(...o)=>{clearTimeout(n),n=setTimeout(e,t,...o)}}window;export{n as a,o as b,e as c,i as d,r as e,t as f,a as g,u as h};